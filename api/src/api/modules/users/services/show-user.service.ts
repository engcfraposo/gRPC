import client from '../grpc';

interface Request {
  id: string;
}

class ShowUsersService {
  public async exec({ id }: Request): Promise<any> {
    const response = await new Promise((resolve, reject) => {
      client.getUserById({ id }, (err: any, res: any) => {
        if (err) reject(err);
        else resolve(res);
      });
    });

    return response;
  }
}

export default ShowUsersService;
