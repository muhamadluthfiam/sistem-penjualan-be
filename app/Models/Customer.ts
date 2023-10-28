import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import SaleTransaction from './SaleTransaction'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public address: string

  @column()
  public phone: string

  @column()
  public is_member: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => SaleTransaction, { foreignKey: 'id' })
  public saleTransaction: BelongsTo<typeof SaleTransaction>

  static search () {
    return [
      'name'
    ]
  }
}
