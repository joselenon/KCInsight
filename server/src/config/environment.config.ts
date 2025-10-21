import dotenv from 'dotenv';
import path from 'path';
import { EnvVariablesMissingError } from './errors/classes/SystemErrors';

const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });

const ENVIRONMENT = {
  MODE: process.env.MODE as 'DEVELOPMENT' | 'PRODUCTION',
  HTTPS: process.env.HTTPS === 'true' ? true : false,
  DOMAIN: process.env.DOMAIN ? process.env.DOMAIN : 'localhost',

  SERVER_URL: process.env.SERVER_URL ? process.env.SERVER_URL : 'localhost',
  SERVER_PORT: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001,

  CLIENT_URL: process.env.CLIENT_URL ? process.env.CLIENT_URL : 'localhost',
  CLIENT_PORT: process.env.CLIENT_PORT ? Number(process.env.CLIENT_PORT) : 3000,

  JWT_SECRET: process.env.JWT_SECRET as string,

  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,

  RABBITMQ_USERNAME: process.env.RABBITMQ_USERNAME || 'guest',
  RABBITMQ_PASSWORD: process.env.RABBITMQ_PASSWORD || 'guest',
  RABBITMQ_HOST: process.env.RABBITMQ_HOST as string,
  RABBITMQ_PORT: process.env.RABBITMQ_PORT as string,

  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,

  GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
  GOOGLE_OAUTH_CLIENT_SECRET_KEY: process.env.GOOGLE_OAUTH_CLIENT_SECRET_KEY as string,

  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY as string,
};

const requiredVariables = ['OPENROUTER_API_KEY'];

const missingVariables = requiredVariables.filter(
  (variable) => !process.env[variable] || process.env[variable] === '' || typeof variable !== 'string',
);

if (missingVariables.length > 0) {
  throw new EnvVariablesMissingError(missingVariables);
}

export default ENVIRONMENT;
