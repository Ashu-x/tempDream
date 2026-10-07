import { z } from 'zod';
import { userIdSchema } from '../../common/validations/userIdSchema.js';

export const UserIdParamsSchema = z.object({ userid: userIdSchema }).strict();