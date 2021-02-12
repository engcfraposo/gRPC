import BaseRouter from '../../../commons/router/base.router';
import HealthcheckController from './controllers/healthcheck.controller';

class HealthcheckRouter extends BaseRouter {
  public controller = HealthcheckController;

  initialize(): void {
    this.get('/', this.controller.index);
  }
}

export default new HealthcheckRouter().getRouter();
