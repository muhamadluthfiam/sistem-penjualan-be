import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
import Unit from './Unit'
import Brand from './Brand'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public categoryId : number

  @column()
  public unitId: number

  @column()
  public brandId: number

  @column()
  public name: string

  @column()
  public quantity: number

  @column()
  public purchase_price: number
  
  @column()
  public sale_price: number
  
  @column()
  public profit: number

  @column()
  public slug: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @belongsTo(() => Unit)
  public unit: BelongsTo<typeof Unit>

  @belongsTo(() => Brand)
  public brand: BelongsTo<typeof Brand>

  static search () {
    return [
      'name'
    ]
  }

  static getId () {
    return 'id'
  }
}
