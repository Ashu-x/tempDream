import { PrismaClient } from '@prisma/client';
import { DreamReadService, type DreamRecord, type RelatableDreamsQuery } from './DreamReadService.js';
import { DreamSearchService, type SearchDreamsQuery } from './DreamSearchService.js';
import { DreamWriteService, type CreateDreamInput } from './DreamWriteService.js';

export class DreamService {
  private readonly read: DreamReadService;
  private readonly write: DreamWriteService;
  private readonly searchService: DreamSearchService;

  constructor(db: PrismaClient) {
    this.read = new DreamReadService(db);
    this.write = new DreamWriteService(db);
    this.searchService = new DreamSearchService(db);
  }

  listRecent(limit: number): Promise<DreamRecord[]> { return this.read.listRecent(limit); }

  listAnonymous(limit: number): Promise<DreamRecord[]> { return this.read.listAnonymous(limit); }

  getRandom(): Promise<DreamRecord | null> { return this.read.getRandom(); }

  getById(dreamId: number): Promise<DreamRecord | null> { return this.read.getById(dreamId); }

  listByUser(userId: number): Promise<DreamRecord[]> { return this.read.listByUser(userId); }

  listRelatable(query: RelatableDreamsQuery): Promise<DreamRecord[]> { return this.read.listRelatable(query); }

  create(input: CreateDreamInput): Promise<number> { return this.write.create(input); }

  search(query: SearchDreamsQuery) { return this.searchService.search(query); }
}