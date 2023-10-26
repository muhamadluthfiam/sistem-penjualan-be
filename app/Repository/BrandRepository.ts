import BaseRepository from "App/Traits/BaseRepository";
import Brand from "App/Models/Brand";

class BrandRepository extends BaseRepository {
  constructor() {
    super(Brand)
  }
  
}

export = new BrandRepository()

