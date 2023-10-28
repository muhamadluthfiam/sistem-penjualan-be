import BaseRepository from "App/Traits/BaseRepository";
import SaleTransaction from "App/Models/SaleTransaction";

class SaleTransactionRepository extends BaseRepository {
  constructor() {
    super(SaleTransaction)
  }
}

export = new SaleTransactionRepository()

