import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import SaleTransaction from './SaleTransaction'
import Unit from './Unit'
import Brand from './Brand'
import Customer from './Customer'

export default class DetailSaleTransaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public product_id: number
  
  @column()
  public sale_transaction_id: number

  @column()
  public salePrice: number

  @column()
  public quantity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => Product, { foreignKey: 'product_id' })
  public product: BelongsTo<typeof Product>
  
  @belongsTo(() => SaleTransaction, { foreignKey: 'sale_transaction_id' })
  public saleTransaction: BelongsTo<typeof SaleTransaction>
  
  @belongsTo(() => Customer, { foreignKey: 'sale_transaction_id' })
  public customer: BelongsTo<typeof Customer>
  
  @belongsTo(() => Unit, { foreignKey: 'product_id' })
  public unit: BelongsTo<typeof Unit>
  
  @belongsTo(() => Brand, { foreignKey: 'product_id' })
  public brand: BelongsTo<typeof Brand>

}


