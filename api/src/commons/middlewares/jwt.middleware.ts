import { Request, Response, NextFunction, RequestHandler } from 'express';

import HttpController from '../controllers/http.controller';

class JwtMiddleware extends HttpController {
  public jwt = require('jsonwebtoken');

  public secret = 'Attomic';

  constructor() {
    super();
    this.process = this.process.bind(this);
  }

  getTokenFromHeader(req: Request): string {
    const { authorization } = req.headers;
    return authorization ? authorization.split(/(\s+)/)[2] : '';
  }

  async process(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { originalUrl } = req;
    let token;
    try {
      if (
        originalUrl.indexOf('/api/healthcheck') > -1 ||
        originalUrl.indexOf('/api/users/v1') > -1 ||
        originalUrl.indexOf('/api/sessions/v1') > -1
      ) {
        next();
      } else {
        token = this.getTokenFromHeader(req);

        const decoded = this.jwt.verify(token, this.secret);
        res.locals.token = decoded;
        next();
      }
    } catch (err) {
      this.sendResponse(res, next, undefined, {
        message: this.messages.TOKEN_EXPIRED,
        status: 401,
      });
    }
  }

  initialize(): RequestHandler {
    return this.process;
  }
}

export default new JwtMiddleware();
