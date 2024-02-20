import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ordini'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('cliente_id').references('id').inTable('clienti').notNullable()

      table.integer('vettura_id').references('id').inTable('vetture').notNullable()

      table.date('data_ordine')

      table.date('data_consegna')

      table.decimal('importo_vendita')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}