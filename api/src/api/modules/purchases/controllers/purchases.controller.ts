import { NextFunction, Request, Response } from 'express';
import HttpController from '../../../../commons/controllers/http.controller';
import CreatePurchaseService from '../../purchases/services/create-purchase.service';
import ShowPurchaseService from '../../purchases/services/show-purchase.service';

class PurchasesController extends HttpController {
  public index = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = req.params;

    const getPurchaseById = new ShowPurchaseService();

    const purchase = await getPurchaseById.exec({ id });

    this.sendResponse(res, next, purchase);
  };

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { title, value, userId } = req.body;

    const createPurchase = new CreatePurchaseService();

    const purchase = await createPurchase.exec({ title, value, userId });

    this.sendResponse(res, next, purchase);
  };
}

export default new PurchasesController();
