import BaseRepository from "App/Traits/BaseRepository";
import PurchaseTransaction from "App/Models/PurchaseTransaction";

class PurchaseRepository extends BaseRepository {
  constructor() {
    super(PurchaseTransaction)
  }

  public async indexTransactions (payload, relations: string[] = []) {
    try {
      if (payload) {
        let data = this.model.query()
        // const search = payload.s
        // const modelSearch = await this.search()
        // if (search) {
        //   modelSearch.forEach((model) => {
        //     data.where(model, search)
        //   })
        //   return data
        // }
        data = relations ? await this.paginate(payload, relations) : await this.paginateNotRelations(payload)
        return data
      }
    } catch (error) {
      throw new console.log(error)
    }
  }
}



export = new PurchaseRepository()

