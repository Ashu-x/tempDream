import type { NextFunction, Request, Response } from 'express';
import { DreamService } from '../services/DreamService.js';
import { SearchDreamsQuerySchema } from '../validations/SearchDreamsQuerySchema.js';

export const searchDream = (dreams: DreamService) => 
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = SearchDreamsQuerySchema.parse(req.query);
    res.status(200).json(await dreams.search(query));
  } catch (error) {
    next(error);
  }
};