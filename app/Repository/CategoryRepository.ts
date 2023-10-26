import BaseRepository from "App/Traits/BaseRepository";
import Category from "App/Models/Category";

class CategoryRepository extends BaseRepository {
  constructor() {
    super(Category)
  }
  
}

export = new CategoryRepository()

