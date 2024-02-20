
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Marche extends BaseModel {

  public static table = 'marche'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string


}