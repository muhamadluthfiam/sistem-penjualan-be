import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Permissions extends BaseSchema {
  protected tableName = 'permissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.boolean('create').defaultTo(false)
      table.boolean('read').defaultTo(false)
      table.boolean('write').defaultTo(false)
      table.boolean('update').defaultTo(false)
      table.boolean('delete').defaultTo(false)
      // Kolom-kolom lain yang Anda butuhkan
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
