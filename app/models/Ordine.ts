import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Vetture from './Vettura.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Ordini extends BaseModel {

  public static table= 'ordini'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare  cliente_id: number

  @column()
  declare  vettura_id: number

  @column()
  declare  data_ordine: Date

  @column()
  declare  data_consegna: Date

  @column()
  declare  importo_vendita: Number

  @hasOne(() => Vetture, {
    localKey: 'vettura_id',
    foreignKey: 'id'
  })


  declare vetture: HasOne<typeof Vetture> 
 
}