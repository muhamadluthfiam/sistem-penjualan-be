import BaseRepository from "App/Traits/BaseRepository";
import Product from "App/Models/Product";

class ProductRepository extends BaseRepository {
  constructor() {
    super(Product)
  }
  
}

export = new ProductRepository()

