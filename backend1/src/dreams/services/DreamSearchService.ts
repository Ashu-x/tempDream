import { Prisma, PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { dreamSelect } from './DreamReadService.js';
import { SearchDreamsQuerySchema } from '../validations/SearchDreamsQuerySchema.js';

type SearchHit = { dream_id: number; rank: number; total: number };
export type SearchDreamsQuery = z.infer<typeof SearchDreamsQuerySchema>;

export class DreamSearchService {
  constructor(private readonly db: PrismaClient) {}

  async search({ q, page, limit }: SearchDreamsQuery) {
    const offset = (page - 1) * limit;
    const hits = await this.db.$queryRaw<SearchHit[]>(Prisma.sql`WITH parsed AS (SELECT websearch_to_tsquery('english', ${q}) AS tsq) SELECT d."dream_id", ts_rank(d."search_vector", parsed.tsq, 1) AS rank, COUNT(*) OVER()::int AS total FROM "Dreams" d, parsed WHERE d."search_vector" @@ parsed.tsq ORDER BY rank DESC, d."dream_id" DESC LIMIT ${limit} OFFSET ${offset}`);
    if (hits.length === 0) return { results: [], page, limit, total: 0, totalPages: 0 };
    const dreams = await this.db.dreams.findMany({ where: { dream_id: { in: hits.map((hit) => hit.dream_id) } }, select: { ...dreamSelect, dreamer: { select: { id: true } } } });
    const byId = new Map(dreams.map((dream) => [dream.dream_id, dream]));
    const results = hits.flatMap((hit) => {
      const dream = byId.get(hit.dream_id);
      if (!dream) return [];
      const { dream_content, dreamer, ...rest } = dream;
      return [{ ...rest, excerpt: dream_content.length > 200 ? `${dream_content.slice(0, 200)}...` : dream_content, dreamer: dream.is_anonymous ? null : dreamer, rank: hit.rank }];
    });
    const total = hits[0].total;
    return { results, page, limit, total, totalPages: Math.ceil(total / limit) };
  }
}