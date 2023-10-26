import { Exception } from "@adonisjs/core/build/standalone";
import { BaseModel } from "@ioc:Adonis/Lucid/Orm";

class BaseRepository {
  public model: any

  constructor (model) {
    this.model = model
  }

  public async search () {
    return await this.model.search()
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

  public async findId(payload, relations: string[]) {
    const query = this.model.query()
    relations.forEach(relation => {
      query.preload(relation);
    });

    return query.where(this.model.primaryKey, payload)
  }


  public async index (payload, relations: string[] = []) {
    try {
      if (payload) {
        let data = this.model.query()
        const search = payload.s
        const modelSearch = await this.search()
        if (search) {
          modelSearch.forEach((model) => {
            data.where(model, search)
          })
          return data
        }
        data = await this.paginate(payload, relations)
        return data
      }
    } catch (error) {
      throw new Exception(error.message)
    }
  }

  public async findById (id, relations: string[]) {
    try {
      const data = await this.findId(id, relations)
      return data
    } catch (e) {
      throw new Exception(e.message)
    }
  }

  public async store (payload, id = null) {
    try {
      const request = payload
      let data = id ? await this.model.find(id) : new this.model()
      data.merge(request)
      await data.save()
      return data
    } catch (e) {
      throw new Exception(e.message)
    }
  }

  public async destroy (id) {
    try {
      let data = await this.model.find(id)
      if (data) {
        data.delete()
        return data
      }
    } catch (e) {
      throw new Exception(e.message)
    }
  }
}

export = BaseRepository