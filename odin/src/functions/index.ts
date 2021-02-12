import { getRepository, Repository } from 'typeorm';
import PurchasesRepository from '../repositories/purchases.repository';
import Purchase from '../models/Purchase';

export default {
  async getPurchaseByIdRequest(call: any, callback: Function): Promise<void> {
    const { id } = call.request;

    const repository = getRepository(Purchase);

    const purchasesRepository = new PurchasesRepository(
      repository as Repository<Purchase>,
    );

    const purchase = await purchasesRepository.getById(id);

    return callback(null, { purchase });
  },
  async listPurchases(call: any, callback: Function): Promise<void> {
    const { userId } = call.request;

    const repository = getRepository(Purchase);

    const purchasesRepository = new PurchasesRepository(
      repository as Repository<Purchase>,
    );

    const purchases = await purchasesRepository.getByUserId(userId);

    return callback(null, { purchases });
  },

  async createPurchase(call: any, callback: Function): Promise<void> {
    const { title, value, userId } = call.request.purchase;

    const repository = getRepository(Purchase);

    const purchasesRepository = new PurchasesRepository(
      repository as Repository<Purchase>,
    );

    const purchase = await purchasesRepository.create({
      title,
      value,
      userId,
    });

    return callback(null, { purchase });
  },
};
