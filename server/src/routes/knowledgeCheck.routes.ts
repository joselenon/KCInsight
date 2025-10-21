import { Router } from 'express';
import URLS from '../config/urls.config';
import knowledgeCheckController from '@/controllers/knowledgeCheck.controller';

const knowledgeCheckRoutes = Router();

knowledgeCheckRoutes.post(
  URLS.ENDPOINTS.STUDY_MAP.KNOWLEDGE_CHECK.GENERATE_REPORT,
  knowledgeCheckController.generateReport,
);

export default knowledgeCheckRoutes;
