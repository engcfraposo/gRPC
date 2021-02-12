import BaseRouter from '../../../commons/router/base.router';
import UsersController from './controllers/users.controller';

class UsersRouter extends BaseRouter {
  public controller = UsersController;

  initialize(): void {
    this.get('/v1/id/:id', this.controller.index);
    this.post('/v1', this.controller.create);
  }
}

export default new UsersRouter().getRouter();
