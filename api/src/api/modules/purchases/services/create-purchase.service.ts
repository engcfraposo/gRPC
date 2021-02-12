import client from '../grpc';

interface Request {
  title: string;
  value: number;
  userId: string;
}

class CreatePurchaseService {
  public async exec({ title, value, userId }: Request): Promise<any> {
    const response = await new Promise((resolve, reject) => {
      client.createPurchase(
        { purchase: { title, value, userId } },
        (err: any, res: any) => {
          if (err) reject(err);
          else resolve(res);
        },
      );
    });
    return response;
  }
}

export default CreatePurchaseService;
