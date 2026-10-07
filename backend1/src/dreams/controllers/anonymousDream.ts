import type { NextFunction, Request, Response } from 'express';
import { DreamService } from '../services/DreamService.js';
import { AnonymousDreamsQuerySchema } from '../validations/AnonymousDreamsQuerySchema.js';

export const anonymousDream = (dreams: DreamService) => 
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { limit } = AnonymousDreamsQuerySchema.parse(req.query);
    const result = await dreams.listAnonymous(limit);
    if (result.length === 0) {
      res.status(404).json({ error: 'No dreams found' });
      return;
    }
    res.status(200).json({ count: result.length, dreams: result });
  } catch (error) {
    next(error);
  }
};