import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  server: express.Application;

  constructor() {
    this.server = express();
    this.midlewares();
    this.routes();
  }

  midlewares(): void {
    this.server.use(express.json({ limit: '20mb' }));
    this.server.use(express.urlencoded({ limit: '20mb', extended: true }));
    this.server.use(cors());
  }

  routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
