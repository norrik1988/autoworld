import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vetture'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      
      table.increments('id').primary().notNullable

      table.integer('marca_id').references('id').inTable('marche')

      table.string('modello')

      table.decimal('prezzo')

      table.date('data_immatricolazione')

      table.integer('sede_id').references('id').inTable('sedi')

      
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}