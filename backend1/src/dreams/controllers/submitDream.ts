import type { NextFunction, Request, Response } from 'express';
import { DreamService } from '../services/DreamService.js';
import { CreateDreamSchema } from '../validations/CreateDreamSchema.js';

export const submitDream = (dreams: DreamService) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const input = CreateDreamSchema.parse(req.body);
    const dreamId = await dreams.create(input);
    res.status(201).json({ message: 'Dream published', dreamId });
  } catch (error) {
    next(error);
  }
};