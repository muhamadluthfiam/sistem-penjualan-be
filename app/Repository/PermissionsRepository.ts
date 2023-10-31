import BaseRepository from "App/Traits/BaseRepository";
import Permission from "App/Models/Permission";

class PermissionsRepository extends BaseRepository {
  constructor() {
    super(Permission)
  }
  
}

export = new PermissionsRepository()

