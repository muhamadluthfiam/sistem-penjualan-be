import { DateTime } from 'luxon'
import { BaseModel, HasMany, HasOne, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import SaleTransaction from './SaleTransaction'

export default class DetailSaleTransaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public productId : number
  
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

  @hasMany(() => Product, { foreignKey: 'product_id' })
  public product: HasMany<typeof Product>

  @hasOne(() => SaleTransaction, { foreignKey: 'sale_transaction_id' })
  public saleTransactionId: HasOne<typeof SaleTransaction>
}
