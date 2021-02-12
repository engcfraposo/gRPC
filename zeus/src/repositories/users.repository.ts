import { Repository } from 'typeorm';
import User from '../models/User';

interface Request {
  username: string;
}

interface CreateRequest extends Request {
  email: string;
  password_hash: string;
}

class UsersRepository {
  private usersRepository: Repository<User>;

  constructor(repository: Repository<User>) {
    this.usersRepository = repository;
  }

  public async create({
    email,
    username,
    password_hash,
  }: CreateRequest): Promise<User> {
    const user = this.usersRepository.create({
      email,
      username,
      password_hash,
    });

    await this.usersRepository.save(user);

    return user;
  }

  public async getByLogin({ username }: Request): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({
      where: {
        username,
      },
    });

    return user;
  }

  public async getById(id: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne(id);

    return user;
  }
}

export default UsersRepository;
