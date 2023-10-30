import { DateTime } from 'luxon'
import { BaseModel, HasOne, belongsTo, column, hasOne, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Customer from 'App/Models/Customer';
import DetailSaleTransaction from './DetailSaleTransaction';

export default class SaleTransaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public customer_id: number;

  @column()
  public invoice: string

  @column.date()
  public date: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Customer, { foreignKey: 'id' })
  public customers: HasOne<typeof Customer>

  @belongsTo(() => DetailSaleTransaction, { foreignKey: 'sale_transaction_id' })
  public detailSaleTransaction: BelongsTo<typeof DetailSaleTransaction>
}
