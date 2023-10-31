import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, HasOne, belongsTo, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
import Unit from './Unit'
import Brand from './Brand'
import DetailSaleTransaction from './DetailSaleTransaction'

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

  @belongsTo(() => Category, {
    foreignKey: 'categoryId',
  })
  public category: BelongsTo<typeof Category>

  @hasOne(() => Unit, { foreignKey: 'id' })
  public unit: HasOne<typeof Unit>

  @hasOne(() => Brand,{ foreignKey: 'id' })
  public brand: HasOne<typeof Brand>
  
  @hasMany(() => DetailSaleTransaction, { foreignKey: 'product_id' })
  public sale: HasMany<typeof DetailSaleTransaction>

  static search () {
    return [
      'name'
    ]
  }

  static getId () {
    return 'id'
  }
}
