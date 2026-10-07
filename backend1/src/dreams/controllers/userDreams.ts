import type { NextFunction, Request, Response } from 'express';
import { DreamService } from '../services/DreamService.js';
import { EmptyQuerySchema } from '../validations/EmptyQuerySchema.js';
import { UserIdParamsSchema } from '../validations/UserIdParamsSchema.js';

export const userDreams = (dreams: DreamService) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { userid } = UserIdParamsSchema.parse(req.params);
    EmptyQuerySchema.parse(req.query);
    const result = await dreams.listByUser(userid);
    res.status(200).json({ userId: userid, count: result.length, dreams: result });
  } catch (error) {
    next(error);
  }
};