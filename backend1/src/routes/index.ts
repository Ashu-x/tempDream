import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { searchDream } from '../dreams/controllers/searchDream.js';
import { submitDream } from '../dreams/controllers/submitDream.js';
import { userDreams } from '../dreams/controllers/userDreams.js';
import { DreamService } from '../dreams/services/DreamService.js';
import { dreamRouter } from './dreamRouter.js';
import { homepageRouter } from './homepage.js';
import { relatableDreamsRouter } from './relatableDreams.js';

export const apiRouter = (dreams: DreamService): Router => {
  const router = Router();
  const searchLimiter = rateLimit({ windowMs: 60 * 1000, limit: 30, standardHeaders: true, legacyHeaders: false });

  router.use('/', homepageRouter(dreams));
  router.get('/user/:userid', userDreams(dreams));
  router.post('/submit-dream', submitDream(dreams));
  router.use('/dream', dreamRouter(dreams));
  router.use('/relatable-dreams', relatableDreamsRouter(dreams));
  router.get('/bulk', searchLimiter, searchDream(dreams));
  router.get('/dreams/search', searchLimiter, searchDream(dreams));
  return router;
};