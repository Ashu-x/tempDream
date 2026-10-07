import { z } from 'zod';

export const RelatableDreamsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
}).strict();