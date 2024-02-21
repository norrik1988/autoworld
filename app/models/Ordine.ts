import { BaseModel, belongsTo, column,  hasOne } from '@adonisjs/lucid/orm'
import Vetture from './Vettura.js'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Cliente from './Cliente.js'

export default class Ordini extends BaseModel {

  public static table= 'ordini'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare  cliente_id: number

  @column()
  declare  vettura_id: number

  @column()
  declare  data_ordine: DateTime

  @column()
  declare  data_consegna: DateTime|null

  @column()
  declare  importo_vendita: Number

  @hasOne(() => Vetture, {
    localKey: 'vettura_id',
    foreignKey: 'id'
  })
  
  declare vetture: HasOne<typeof Vetture>
  
  @belongsTo(() => Cliente, {
    localKey: 'id',
    foreignKey: 'cliente_id'
  })

  declare cliente: BelongsTo<typeof Cliente> 
    
 
}