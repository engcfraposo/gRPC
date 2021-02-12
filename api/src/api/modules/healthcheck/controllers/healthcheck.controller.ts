import { NextFunction, Request, Response } from 'express';
import HttpController from '../../../../commons/controllers/http.controller';
import HealthcheckService from '../services/healthcheck.service';

class HealthcheckController extends HttpController {
  public index = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const health = HealthcheckService.exec();
    this.sendResponse(res, next, health);
  };
}

export default new HealthcheckController();
