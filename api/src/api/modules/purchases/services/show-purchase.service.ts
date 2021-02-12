import client from '../grpc';

interface Request {
  id: string;
}

class ShowPurchaseService {
  public async exec({ id }: Request): Promise<any> {
    const response = await new Promise((resolve, reject) => {
      client.getPurchaseByIdRequest({ id }, (err: any, res: any) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
    return response;
  }
}

export default ShowPurchaseService;
