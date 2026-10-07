import type { NextFunction, Request, Response } from 'express';
import { DreamService } from '../services/DreamService.js';
import { RelatableDreamsQuerySchema } from '../validations/RelatableDreamsQuerySchema.js';

export const relatableDreams = (dreams: DreamService) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = RelatableDreamsQuerySchema.parse(req.query);
    const result = await dreams.listRelatable(query);
    res.status(200).json({ count: result.length, dreams: result });
  } catch (error) {
    next(error);
  }
};