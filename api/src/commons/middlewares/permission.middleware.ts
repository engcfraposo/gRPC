import { Request, Response, NextFunction } from 'express';
import RouterPermissions from '../constants/router.permissions';

interface IPermission {
  name: string;
}
class Permissions {
  private routerPermissions = RouterPermissions;

  public verifyPermission(res: Response, permissionName: string): boolean {
    const { permissions } = res.locals.token;
    const hasPermission =
      permissions.filter(
        (permission: IPermission): boolean =>
          permission.name === permissionName,
      ).length > 0;
    return hasPermission;
  }

  public hasPermission = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> => {
    const path = req.baseUrl.replace('/api/', '') + req.route.path;
    const { method } = req;
    const { permissions } = res.locals.token;
    try {
      const rp = this.routerPermissions.filter(routePermission =>
        permissions.find((p: any) => p.name === routePermission.id),
      );
      const hasPermission = rp.find(r =>
        r.routes.find(route => route.path === path && route.method === method),
      );
      if (!hasPermission) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      next();
    } catch (err) {
      throw new Error(err);
    }
  };
}

export default new Permissions();
