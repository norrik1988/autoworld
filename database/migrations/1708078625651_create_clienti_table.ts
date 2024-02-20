import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clienti'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()

      table.string('nome')

      table.string('cognome')

      table.string('codice_fiscale')


    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}