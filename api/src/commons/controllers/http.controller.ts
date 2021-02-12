import { NextFunction, Response } from 'express';
import Messages from '../constants/messages.constants';

interface IMessageParams {
  message: string;
  status: number;
}
export default class HttpController {
  public messages = Messages;

  sendResponse(
    res: Response,
    next: NextFunction,
    data: unknown,
    params?: IMessageParams,
  ): void {
    const { message = '', status = 200 } = params || {};
    res.status(status).json({
      message,
      data,
    });
    if (next) {
      next();
    }
  }
}
