import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vetture'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('venduta')

      
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}