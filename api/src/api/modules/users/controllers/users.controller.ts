import { NextFunction, Request, Response } from 'express';
import HttpController from '../../../../commons/controllers/http.controller';
import CreateUsersService from '../../users/services/create-user.service';
import ShowUsersService from '../../users/services/show-user.service';

class UsersController extends HttpController {
  public index = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = req.params;

    const getUserById = new ShowUsersService();

    const user = await getUserById.exec({ id });

    this.sendResponse(res, next, user);
  };

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { email, username, password } = req.body;

    const createUser = new CreateUsersService();

    const user = await createUser.exec({ email, username, password });

    this.sendResponse(res, next, user);
  };
}

export default new UsersController();
