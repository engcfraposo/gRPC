import { NextFunction, Request, Response } from 'express';

export default (fn: Function) => (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  Promise.resolve(fn(req, res, next)).catch(error => {
    res.status(400).json({
      message: (error || {}).message,
      data: error,
    });
  });
};
