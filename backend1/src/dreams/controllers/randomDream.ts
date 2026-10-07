import type { NextFunction, Request, Response } from 'express';
import { DreamService } from '../services/DreamService.js';
import { EmptyQuerySchema } from '../validations/EmptyQuerySchema.js';

export const randomDream = (dreams: DreamService) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    EmptyQuerySchema.parse(req.query);
    const result = await dreams.getRandom();
    if (!result) {
      res.status(404).json({ error: 'No dreams found' });
      return;
    }
    res.status(200).json({ dream: result });
  } catch (error) {
    next(error);
  }
};