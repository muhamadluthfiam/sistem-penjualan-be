import { Exception } from "@adonisjs/core/build/standalone";
import { BaseModel } from "@ioc:Adonis/Lucid/Orm";

class BaseRepository {
  public model: any

  constructor (model) {
    this.model = model
  }

  public async search() {
    return this.model.search() || null
  }

  public async paginate(payload, relations: string[]) {
    const perPage = parseInt(payload.perPage) || 10
    const page = parseInt(payload.page) || 1
    const query = this.model.query()

    relations.forEach(relation => {
      query.preload(relation);
    });

    return query.paginate(page, perPage)
  }

  public async index (payload, relations: string[] = []) {
    try {
      if (payload) {
        let data = this.model.query()
        const search = payload.s
        const columns = await this.search()

        // if (relations.length > 0) {
        //   data.preload('category').preload('unit')
        //   console.log()
        // }
        console.log(relations)
        data = await this.paginate(payload, relations)
        return data
      }
    } catch (error) {
      throw new Exception(error.message)
    }
  }
}

export = BaseRepository