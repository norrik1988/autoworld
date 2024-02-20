import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'marche'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('nome', 32)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}