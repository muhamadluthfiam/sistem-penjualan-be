import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
      table.integer('unit_id').unsigned().references('id').inTable('units').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('name')
      table.integer('quantity')
      table.integer('purchase_price')
      table.integer('sale_price')
      table.integer('profit')
      table.string('slug')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
