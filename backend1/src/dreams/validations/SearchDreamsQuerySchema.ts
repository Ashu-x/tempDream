import { z } from 'zod';

export const SearchDreamsQuerySchema = z.object({
  q: z.string().trim().min(3, 'Search text must be at least 3 characters').max(200),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
}).strict();