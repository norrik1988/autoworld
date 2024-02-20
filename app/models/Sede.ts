import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Vetture from './Vettura.js'


export default class Sedi extends BaseModel {

  public static table = 'sedi'
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string
  
  @column()
  declare comune: string

  @hasMany(() => Vetture, {
    localKey: 'id',
    foreignKey: 'sede_id'
  })

  declare vetture: HasMany<typeof Vetture>
  

  
}