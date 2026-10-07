import type { NextFunction, Request, Response } from 'express';
import { DreamService } from '../services/DreamService.js';
import { AnonymousDreamsQuerySchema } from '../validations/AnonymousDreamsQuerySchema.js';
import { CreateDreamSchema } from '../validations/CreateDreamSchema.js';
import { DreamIdParamsSchema } from '../validations/DreamIdParamsSchema.js';
import { EmptyQuerySchema } from '../validations/EmptyQuerySchema.js';
import { RecentDreamsQuerySchema } from '../validations/RecentDreamsQuerySchema.js';
import { RelatableDreamsQuerySchema } from '../validations/RelatableDreamsQuerySchema.js';
import { SearchDreamsQuerySchema } from '../validations/SearchDreamsQuerySchema.js';
import { UserIdParamsSchema } from '../validations/UserIdParamsSchema.js';

export class DreamController {
  constructor(private readonly dreams: DreamService) {}

  recent = async (req: Request, res: Response, next: NextFunction): Promise<void> => { try { const { limit } = RecentDreamsQuerySchema.parse(req.query); const dreams = await this.dreams.listRecent(limit); res.status(200).json({ count: dreams.length, dreams }); } catch (error) { next(error); } };
  anonymous = async (req: Request, res: Response, next: NextFunction): Promise<void> => { try { const { limit } = AnonymousDreamsQuerySchema.parse(req.query); const dreams = await this.dreams.listAnonymous(limit); if (dreams.length === 0) { res.status(404).json({ error: 'No dreams found' }); return; } res.status(200).json({ count: dreams.length, dreams }); } catch (error) { next(error); } };
  random = async (req: Request, res: Response, next: NextFunction): Promise<void> => { try { EmptyQuerySchema.parse(req.query); const dream = await this.dreams.getRandom(); if (!dream) { res.status(404).json({ error: 'No dreams found' }); return; } res.status(200).json({ dream }); } catch (error) { next(error); } };
  byId = async (req: Request, res: Response, next: NextFunction): Promise<void> => { try { const { dreamid } = DreamIdParamsSchema.parse(req.params); EmptyQuerySchema.parse(req.query); const dream = await this.dreams.getById(dreamid); if (!dream) { res.status(404).json({ error: 'Dream not found' }); return; } res.status(200).json({ dreams: [dream] }); } catch (error) { next(error); } };
  byUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => { try { const { userid } = UserIdParamsSchema.parse(req.params); EmptyQuerySchema.parse(req.query); const dreams = await this.dreams.listByUser(userid); res.status(200).json({ userId: userid, count: dreams.length, dreams }); } catch (error) { next(error); } };
  relatable = async (req: Request, res: Response, next: NextFunction): Promise<void> => { try { const query = RelatableDreamsQuerySchema.parse(req.query); const dreams = await this.dreams.listRelatable(query); res.status(200).json({ count: dreams.length, dreams }); } catch (error) { next(error); } };
  submit = async (req: Request, res: Response, next: NextFunction): Promise<void> => { try { const input = CreateDreamSchema.parse(req.body); const dreamId = await this.dreams.create(input); res.status(201).json({ message: 'Dream published', dreamId }); } catch (error) { next(error); } };
  search = async (req: Request, res: Response, next: NextFunction): Promise<void> => { try { const query = SearchDreamsQuerySchema.parse(req.query); res.status(200).json(await this.dreams.search(query)); } catch (error) { next(error); } };
}