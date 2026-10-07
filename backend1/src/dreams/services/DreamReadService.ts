import { Prisma, PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { RelatableDreamsQuerySchema } from '../validations/RelatableDreamsQuerySchema.js';

export const dreamSelect = {
  dream_id: true,
  title: true,
  is_anonymous: true,
  dreamer_id: true,
  dream_content: true,
  real_life_context: true,
  dreamer_interpretation: true,
  view_count: true,
  createdAt: true,
  updatedAt: true,
} as const;

export type DreamRecord = Prisma.DreamsGetPayload<{ select: typeof dreamSelect }>;
export type RelatableDreamsQuery = z.infer<typeof RelatableDreamsQuerySchema>;

export class DreamReadService {
  constructor(private readonly db: PrismaClient) {}

  async listRecent(limit: number): Promise<DreamRecord[]> {
    return this.db.dreams.findMany({
        where: { updatedAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } }, 
        orderBy: { updatedAt: 'desc' }, take: limit, select: dreamSelect 
    });
  }

  async listAnonymous(limit: number): Promise<DreamRecord[]> {
    return this.db.dreams.findMany({
        where: { is_anonymous: true }, 
        orderBy: { updatedAt: 'desc' }, 
        take: limit, select: dreamSelect });
  }

  async getRandom(): Promise<DreamRecord | null> {
    const rows = await this.db.$queryRaw<Array<{ dream_id: number }>>(Prisma.sql`SELECT "dream_id" FROM "Dreams" ORDER BY RANDOM() LIMIT 1`);
    return rows[0] ? this.getById(rows[0].dream_id) : null;
  }

  async getById(dreamId: number): Promise<DreamRecord | null> {
    return this.db.dreams.findUnique({
        where: { dream_id: dreamId }, 
        select: dreamSelect });
  }

  async listByUser(userId: number): Promise<DreamRecord[]> {
    return this.db.dreams.findMany({
        where: { dreamer_id: userId }, 
        orderBy: { createdAt: 'desc' }, 
        select: dreamSelect });
  }

  async listRelatable({ limit }: RelatableDreamsQuery): Promise<DreamRecord[]> {
    return this.db.dreams.findMany({
        orderBy: [{ view_count: 'desc' }, { updatedAt: 'desc' }], 
        take: limit, select: dreamSelect });
  }
}