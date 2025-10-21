import { Router } from 'express';
import httpErrorMiddleware from '../middlewares/httpError.middleware';
import knowledgeCheckRoutes from './knowledgeCheck.routes';

const router = Router();

router.use('/', knowledgeCheckRoutes);

router.use(httpErrorMiddleware);

export default router;
