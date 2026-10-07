import { Router } from 'express';
import { anonymousDream } from '../dreams/controllers/anonymousDream.js';
import { getDream } from '../dreams/controllers/getDream.js';
import { randomDream } from '../dreams/controllers/randomDream.js';
import { recentDream } from '../dreams/controllers/recentDream.js';
import { DreamService } from '../dreams/services/DreamService.js';

export const dreamRouter = (dreams: DreamService): Router => {
  const router = Router();
  router.get('/anonymous', anonymousDream(dreams));
  router.get('/recent', recentDream(dreams));
  router.get('/random', randomDream(dreams));
  router.get('/:dreamid', getDream(dreams));
  return router;
};