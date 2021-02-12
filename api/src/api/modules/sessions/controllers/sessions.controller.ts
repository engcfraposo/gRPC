import { NextFunction, Request, Response } from 'express';
import HttpController from '../../../../commons/controllers/http.controller';
import SessionsService from '../services/sessions.service';

class SessionsController extends HttpController {
  public store = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { email, username, password } = req.body;

    const createSession = new SessionsService();

    const session = await createSession.exec({ email, username, password });

    this.sendResponse(res, next, session);
  };
}

export default new SessionsController();
