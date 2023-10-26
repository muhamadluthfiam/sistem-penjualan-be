import BaseRepository from "App/Traits/BaseRepository";
import Supplier from "App/Models/Supplier";

class SupplierRepository extends BaseRepository {
  constructor() {
    super(Supplier)
  }
  
}

export = new SupplierRepository()

