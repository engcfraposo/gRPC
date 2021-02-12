import { Repository } from 'typeorm';
import Purchase from '../models/Purchase';

interface Request {
  title: string;
  value: number;
  userId: string;
}

class PurchasesRepository {
  private purchasesRepository: Repository<Purchase>;

  constructor(repository: Repository<Purchase>) {
    this.purchasesRepository = repository;
  }

  public async create({ title, value, userId }: Request): Promise<Purchase> {
    const user = this.purchasesRepository.create({
      title,
      value,
      userId,
    });

    await this.purchasesRepository.save(user);

    return user;
  }

  public async getByUserId(userId: string): Promise<Purchase[] | undefined> {
    const user = await this.purchasesRepository.find({
      where: {
        userId,
      },
    });

    return user;
  }

  public async getById(id: string): Promise<Purchase | undefined> {
    const user = await this.purchasesRepository.findOne(id);

    return user;
  }
}

export default PurchasesRepository;
