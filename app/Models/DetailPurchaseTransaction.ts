import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
// import SaleTransaction from './SaleTransaction'
import PurchaseTransaction from './PurchaseTransaction'
import Unit from './Unit'
import Brand from './Brand'
import Supplier from './Supplier'

export default class DetailPurchaseTransaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public product_id: number
  
  @column()
  public purchase_transaction_id: number

  @column()
  public purchasePrice: number

  @column()
  public quantity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => Product, { foreignKey: 'product_id' })
  public product: BelongsTo<typeof Product>
  
  @belongsTo(() => PurchaseTransaction, { foreignKey: 'purchase_transaction_id' })
  public saleTransaction: BelongsTo<typeof PurchaseTransaction>
  
  @belongsTo(() => Supplier, { foreignKey: 'purchase_transaction_id' })
  public supplier: BelongsTo<typeof Supplier>
  
  @belongsTo(() => Unit, { foreignKey: 'product_id' })
  public unit: BelongsTo<typeof Unit>
  
  @belongsTo(() => Brand, { foreignKey: 'product_id' })
  public brand: BelongsTo<typeof Brand>

}


