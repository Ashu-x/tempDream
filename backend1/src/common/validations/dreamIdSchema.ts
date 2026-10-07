import { z } from 'zod';

export const dreamIdSchema = z.coerce.number().int().positive();