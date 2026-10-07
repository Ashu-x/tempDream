import { Router } from 'express';
import { recentDream } from '../dreams/controllers/recentDream.js';
import { DreamService } from '../dreams/services/DreamService.js';

export const homepageRouter = (dreams: DreamService): Router => {
  const router = Router();
  router.get('/', recentDream(dreams));
  return router;
};