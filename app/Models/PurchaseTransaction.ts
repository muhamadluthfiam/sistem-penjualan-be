// SaleTransaction Model
import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
// import Customer from 'App/Models/Customer';
import Supplier from 'App/Models/Supplier';

export default class PurchaseTransaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public supplier_id: number;

  @column()
  public invoice: string

  @column.date()
  public date: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Supplier, { foreignKey: 'id' })
  public suppliers: HasMany<typeof Supplier>
}
