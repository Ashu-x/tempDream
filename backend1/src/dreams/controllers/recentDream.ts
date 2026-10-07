import type { NextFunction, Request, Response } from 'express';
import { DreamService } from '../services/DreamService.js';
import { RecentDreamsQuerySchema } from '../validations/RecentDreamsQuerySchema.js';

export const recentDream = (dreams: DreamService) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { limit } = RecentDreamsQuerySchema.parse(req.query);
    const result = await dreams.listRecent(limit);
    res.status(200).json({ count: result.length, dreams: result });
  } catch (error) {
    next(error);
  }
};