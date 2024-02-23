// import type { HttpContext } from '@adonisjs/core/http'

import Ordini from "#models/Ordine";
import { HttpContext } from "@adonisjs/core/http";
import { createPostValidatorOrdini } from "#validators/validators";
import db from "@adonisjs/lucid/services/db";


export default class OrdiniController {


    async ordiniAll (){
        const ordini = await Ordini.query().preload('vetture');
     
        return ordini
        }

    
        async createOrdini({request}:HttpContext) {

            // await createPostValidatorOrdini.validate(request.all(), { messagesProvider:errorMessages })

            await request.validateUsing( createPostValidatorOrdini)

            const post = await Ordini.create({
             cliente_id: request.input('cliente_id'),
             vettura_id: request.input ('vettura_id'),
             data_ordine: request.input('data_ordine'),
             data_consegna: request.input('data_consegna')
            });
           
            return post
          }
        
        async FindOrdineByIdRQ() {
            const ordine = db.rawQuery ('select * from ordini where ?? = ?',
            ['ordini.cliente_id', 1] )

            return ordine
        }

        async deleteOrdini ({params}: HttpContext) {

            const cliente = await Ordini.findOrFail(params.id);
            await cliente.delete();
        
            return cliente
        
            }

            //query b

        

}