import { Router } from 'express';
import { relatableDreams } from '../dreams/controllers/relatableDreams.js';
import { DreamService } from '../dreams/services/DreamService.js';

export const relatableDreamsRouter = (dreams: DreamService): Router => {
  const router = Router();
  router.get('/', relatableDreams(dreams));
  return router;
};