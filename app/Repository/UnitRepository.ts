import BaseRepository from "App/Traits/BaseRepository";
import Unit from "App/Models/Unit";

class UnitRepository extends BaseRepository {
  constructor() {
    super(Unit)
  }
  
}

export = new UnitRepository()

