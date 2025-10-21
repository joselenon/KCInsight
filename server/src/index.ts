// Module alias configuration (import example from "@/")
import 'dotenv/config';
import moduleAlias from 'module-alias';
import path from 'path';

// Detecta se está em produção
const isProd = process.env.MODE === 'PRODUCTION';

// __dirname aqui é src/ (em dev) ou build/ (em prod)
const projectRoot = path.resolve(__dirname, '..');

// Alias dinâmico
moduleAlias.addAliases({
  '@': path.join(projectRoot, isProd ? 'build' : 'src'),
});
//

import ENVIRONMENT from './config/environment.config';
import AppService from './services/app.service';
import { OpenRouterService } from './services/OpenRouter.service';
import schedule from 'node-schedule';

const OpenRouterInstance = new OpenRouterService(ENVIRONMENT.OPENROUTER_API_KEY);

async function init() {
  await AppService.initialize();

  // await UserCredentialsService.startUpdateUserCredentialsQueue();
  // await ChatServiceInstance.startLiveChat();
}

init();

export { OpenRouterInstance };
