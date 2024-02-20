import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Sedi from './Sede.js'

export default class Vetture extends BaseModel {
  public static table = 'vetture'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare  marca_id: number

  @column()
  declare  modello: string

  @column()   
  declare  prezzo: number

  @column()
  declare  data_immatricolazione: Date

  @column()
  declare  sede_id: number

  @belongsTo(() => Sedi, {
    localKey: 'id',
    foreignKey: 'sede_id'
  } )

  
  declare sede:BelongsTo<typeof Sedi>
}