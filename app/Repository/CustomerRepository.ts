import BaseRepository from "App/Traits/BaseRepository";
import Customer from "App/Models/Customer";

class CustomerRepository extends BaseRepository {
  constructor() {
    super(Customer)
  }
  
}

export = new CustomerRepository()

