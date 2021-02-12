import BaseRouter from '../../../commons/router/base.router';
import SessionsController from './controllers/sessions.controller';

class SessionsRouter extends BaseRouter {
  public controller = SessionsController;

  initialize(): void {
    this.post('/v1', this.controller.store);
  }
}

export default new SessionsRouter().getRouter();
