
import { BaseModel, column } from '@adonisjs/lucid/orm'

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

}