// Heart of the application
import express from 'express';

import { GraphQLSchema } from 'graphql';
import { Disposable } from 'graphql-ws';
import { ApolloServer } from '@apollo/server';
import { Server, createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

import routes from '../routes';
import corsMiddleware from '../middlewares/cors.middleware';
import cookieParser from 'cookie-parser';
import { expressJSONMiddleware, expressURLEncodedMiddleware } from '@/middlewares/express.middlewares';
import serverWillStartPlugin from '@/config/plugins/serverWillStartPlugin';
import URLS, { API_BASE } from '@/config/urls.config';
import path from 'path';
// import sessionsMiddleware from '../middlewares/sessionsMiddleware';

class AppService {
  private app: express.Application;
  private httpServer: Server;
  // private wsServer: WebSocketServer;
  // private schema: GraphQLSchema;
  // private serverCleanup: Disposable;
  // private apolloServer: ApolloServer;

  constructor() {
    this.app = express();

    this.httpServer = createServer(this.app);
    // this.schema = makeExecutableSchema({ typeDefs, resolvers });
    // this.wsServer = new WebSocketServer({ server: this.httpServer, path: URLS.ENDPOINTS.GRAPHQL });
    // this.serverCleanup = useServer(
    //   {
    //     schema: this.schema,
    //     // Config. to set context in subscriptions
    //     context: async (ctx: any) => await wsContext(ctx),
    //   },
    //   this.wsServer,
    // );
    // this.apolloServer = new ApolloServer({
    //   schema: this.schema,
    //   formatError,
    //   plugins: [
    //     ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
    //     serverWillStartPlugin(this.serverCleanup),
    //   ],
    // });
  }

  private setupMiddlewares(): void {
    this.app.use(cookieParser());
    this.app.use(corsMiddleware());
    this.app.use(expressJSONMiddleware());
    this.app.use(expressURLEncodedMiddleware());
    // this.app.use(sessionsMiddleware());
  }

  private setupEndpoints(): void {
    // this.app.use(graphQLRouter(this.apolloServer));
    this.app.use(API_BASE, routes);
    this.app.use(`${API_BASE}/activities`, express.static(path.join(__dirname, '../data/activities')));
  }

  public async initialize() {
    this.setupMiddlewares();

    // await this.apolloServer.start();
    this.setupEndpoints();

    // this.wsServer.on('listening', () => console.log('Web-socket server started.'));
    this.httpServer.listen(URLS.MAIN_URLS.SERVER_PORT, () =>
      console.log(`Server started, ${URLS.MAIN_URLS.SERVER_FULL_URL}`),
    );
  }
}

export default new AppService();
