import type { HttpContext } from '@adonisjs/core/http'
import Vetture from "#models/Vettura";
import {  createPostValidatorVetture } from '#validators/validators';
import db from '@adonisjs/lucid/services/db';


export default class VettureController {
    async vettureAll (){
        const vetture = await Vetture.query().preload('sede');
     
        return vetture
        }

    async createVetture({request}:HttpContext) {

            // await createPostValidatorVetture.validate(request.all(), { messagesProvider:errorMessages })

            await request.validateUsing( createPostValidatorVetture)


            const post = await Vetture.create({
             modello: request.input('modello'),
             prezzo: request.input('prezzo'),
             data_immatricolazione: request.input ('data_immatricolazione'),
             marca_id: request.input ('marca_id'),
             sede_id: request.input ('sede_id')
            });
           
            return post
          }
    
    async vettureComparision() {
        const vetture = db.rawQuery(
            'select * from vetture inner join sedi on :column1: = :column2:',
            {
              column1: 'vetture.sede_id',
              column2: 'sedi.id',
            }
          )
        
        return vetture
    }

    async deleteVetture ({params}: HttpContext) {

        const sede = await Vetture.findOrFail(params.id);
        await sede.delete();

        return sede

        }

}

