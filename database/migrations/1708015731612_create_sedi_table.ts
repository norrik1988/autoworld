import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sedi'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('nome', 32)
      table.string('comune', 64)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}