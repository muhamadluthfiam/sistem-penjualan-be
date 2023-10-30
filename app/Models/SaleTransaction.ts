// SaleTransaction Model
import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
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

  @hasMany(() => Customer, { foreignKey: 'id' })
  public customers: HasMany<typeof Customer>

  @hasMany(() => DetailSaleTransaction, { foreignKey: 'sale_transaction_id' })
  public detailSaleTransactions: HasMany<typeof DetailSaleTransaction>
}
