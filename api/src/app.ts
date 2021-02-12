import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import Router from './api/routes';
// import nocache from 'nocache'; // desabilitação de cache

import jwtMiddleware from './commons/middlewares/jwt.middleware';

class App {
  public express: express.Application;

  private router = new Router();

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    // this.express.use(requestId());
    this.express.use(helmet());
    this.express.use(cors());
    // this.express.use(nocache()); // desabilitação de cache
    // this.express.set('Pragma', 'no-cache'); //desabilitar tag pragma
    // this.express.set('Expires', 0); // desabilitar tag expires
    // this.express.set('etag', false); // desabilitar etag
    this.express.use(jwtMiddleware.initialize());
  }

  private routes(): void {
    this.router.initialize(this.express);
  }
}

export default new App().express;
