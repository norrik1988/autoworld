
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Ordini from './Ordine.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Cliente extends BaseModel {

  public static table = 'clienti'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cognome: string

  @column()
  declare codice_fiscale: string

  @hasMany(() => Ordini, {
    localKey: 'id',
    foreignKey: 'cliente_id'
  })

  declare Ordini: HasMany<typeof Ordini>
}