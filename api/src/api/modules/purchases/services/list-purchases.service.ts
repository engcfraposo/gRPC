import client from '../grpc';

interface Request {
  userId: string;
}

class ListPurchasesService {
  public async exec({ userId }: Request): Promise<any> {
    const response = await new Promise((resolve, reject) => {
      client.listPurchases({ userId }, (err: any, res: any) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
    return response;
  }
}

export default ListPurchasesService;
