import BaseRepository from "App/Traits/BaseRepository";
import Product from "App/Models/Product";

class ProductRepository extends BaseRepository {
  constructor() {
    super(Product)
  }

  public async findByIdProduct (id, relations: string[]) {
    try {      
      const query = this.model.query().where('id', id)
      if (relations.length > 0) {
        relations.forEach(relation => {
          query.preload(relation);
        });
      }
      return query.first()
    } catch (e) {
      console.log(e)
    }
  }
  
}

export = new ProductRepository()

