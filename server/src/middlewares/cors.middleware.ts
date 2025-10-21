// Control who's allowed to make requests on this application
import cors from 'cors';

import URLS from '../config/urls.config';
import ENVIRONMENT from '@/config/environment.config';

export default function corsMiddleware() {
  return cors({
    // Which domains can access the API
    origin: URLS.MAIN_URLS.CLIENT_FULL_URL,
    // Allow cookies
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
}
