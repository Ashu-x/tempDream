import { z } from 'zod';

export const CreateDreamSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email(),
  title: z.string().trim().min(4).max(255),
  dream_content: z.string().trim().min(50),
  real_life_context: z.string().trim().min(50),
  dreamer_interpretation: z.string().trim().optional(),
  is_anonymous: z.boolean(),
}).strict();