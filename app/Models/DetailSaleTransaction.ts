import { DateTime } from 'luxon'
import { BaseModel, HasMany, HasOne, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import Customer from './Customer'
import SaleTransaction from './SaleTransaction'

export default class DetailSaleTransaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public product_id : number
  
  @column()
  public sale_transaction_id : number

  @column()
  public salePrice: number

  @column()
  public quantity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Product, { foreignKey: 'id' })
  public product: HasMany<typeof Product>

  @hasOne(() => SaleTransaction, { foreignKey: 'id' })
  public sale: HasOne<typeof SaleTransaction>

  @hasOne(() => Customer, { foreignKey: 'id' })
  public customers: HasOne<typeof Customer>
}
