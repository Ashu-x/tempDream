import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { CreateDreamSchema } from '../validations/CreateDreamSchema.js';

export type CreateDreamInput = z.infer<typeof CreateDreamSchema>;

export class DreamWriteService {
  constructor(private readonly db: PrismaClient) {}

  async create(input: CreateDreamInput): Promise<number> {
    return this.db.$transaction(async (transaction) => {
      const dreamer = await transaction.dreamers.upsert({
        where: { email: input.email }, 
        update: { name: input.name }, 
        create: { name: input.name, email: input.email }, 
        select: { id: true } });

      const dream = await transaction.dreams.create({ 
        data: { title: input.title, is_anonymous: input.is_anonymous, dreamer_id: dreamer.id, dream_content: input.dream_content, real_life_context: input.real_life_context, dreamer_interpretation: input.dreamer_interpretation ?? null }, 
        select: { dream_id: true } });
      return dream.dream_id;
    });
  }
}