import BaseRouter from '../../../commons/router/base.router';
import listPurchasesController from './controllers/list-purchases.controller';
import PurchasesController from './controllers/purchases.controller';

class PurchasesRouter extends BaseRouter {
  public purchasesController = PurchasesController;

  public listPurchasesController = listPurchasesController;

  initialize(): void {
    this.get('/v1/id/:id', this.purchasesController.index);
    this.post('/v1', this.purchasesController.create);
    this.get('/v1/user/:userId', this.listPurchasesController.index);
  }
}

export default new PurchasesRouter().getRouter();
