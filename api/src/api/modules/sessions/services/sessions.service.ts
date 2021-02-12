import client from '../grpc';

interface Request {
  email: string;
  username: string;
  password: string;
}

class SessionsService {
  public async exec({ email, username, password }: Request): Promise<any> {
    const response = await new Promise((resolve, reject) => {
      client.loginUser(
        { user: { email, username, password } },
        (err: any, res: any) => {
          if (err) reject(err);
          else resolve(res);
        },
      );
    });
    return response;
  }
}

export default SessionsService;
