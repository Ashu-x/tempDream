import { z } from 'zod';
import { dreamIdSchema } from '../../common/validations/dreamIdSchema.js';

export const DreamIdParamsSchema = z.object({ dreamid: dreamIdSchema }).strict();