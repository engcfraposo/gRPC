import { join } from 'path';
import { lstatSync, readdirSync } from 'fs';
import { Application } from 'express';

export default class Router {
  public initialize(app: Application): void {
    const isDirectory = (source: string): boolean =>
      lstatSync(source).isDirectory();
    const getDirectories = (source: string): string[] =>
      readdirSync(source).filter((name: string): boolean =>
        isDirectory(join(source, name)),
      );
    getDirectories(join(__dirname, 'modules')).forEach((route): void => {
      app.use(
        `/api/${route.replace(/-/g, '')}`,
        require(`./modules/${route}`).default,
      );
    });
  }
}
