/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Router } from 'express';
import { PathParams, ParamsDictionary } from 'express-serve-static-core';
import Async from '../middlewares/async.middleware'
import express = require('express')

export default class BaseRouter {
  public controller: any;

  private router: Router;

  constructor() {
    this.router = express.Router({ mergeParams: true });
  }

  post(
    path: PathParams,
    fn: { bind: (arg0: any) => Function },
    ...middlewares: any[]
  ): void {
    this.router.post(path, middlewares, Async(fn.bind(this.controller)));
  }

  get(
    path: PathParams,
    fn: { bind: (arg0: any) => Function },
    ...middlewares: any[]
  ): void {
    this.router.get(path, middlewares, Async(fn.bind(this.controller)));
  }

  put(
    path: PathParams,
    fn: { bind: (arg0: any) => Function },
    ...middlewares: any[]
  ): void {
    this.router.put(path, middlewares, Async(fn.bind(this.controller)));
  }

  delete(
    path: PathParams,
    fn: { bind: (arg0: any) => Function },
    ...middlewares: any[]
  ): void {
    this.router.delete(path, middlewares, Async(fn.bind(this.controller)));
  }

  initialize() {}

  getRouter() {
    this.initialize();
    return this.router;
  }
}
