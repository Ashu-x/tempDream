import type { NextFunction, Request, Response } from 'express';
import { DreamService } from '../services/DreamService.js';
import { DreamIdParamsSchema } from '../validations/DreamIdParamsSchema.js';
import { EmptyQuerySchema } from '../validations/EmptyQuerySchema.js';

export const getDream = (dreams: DreamService) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { dreamid } = DreamIdParamsSchema.parse(req.params);
    EmptyQuerySchema.parse(req.query);
    const result = await dreams.getById(dreamid);
    if (!result) {
      res.status(404).json({ error: 'Dream not found' });
      return;
    }
    res.status(200).json({ dreams: [result] });
  } catch (error) {
    next(error);
  }
};