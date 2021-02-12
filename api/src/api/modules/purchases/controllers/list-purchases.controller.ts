import { NextFunction, Request, Response } from 'express';
import HttpController from '../../../../commons/controllers/http.controller';
import ListPurchasesService from '../../purchases/services/list-purchases.service';
import ShowUsersService from '../../users/services/show-user.service';

class ListPurchasesController extends HttpController {
  public index = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { userId } = req.params;

    const getPurchaseByUserId = new ListPurchasesService();

    const purchases = await getPurchaseByUserId.exec({ userId });

    this.sendResponse(res, next, purchases);
  };
}

export default new ListPurchasesController();
