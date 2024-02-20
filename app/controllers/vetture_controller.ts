import type { HttpContext } from '@adonisjs/core/http'
import Vetture from "#models/Vettura";
import {  createPostValidatorVetture } from '#validators/validators';
import { errorMessages } from '#validators/messages';

export default class VettureController {
    async vettureAll (){
        const vetture = await Vetture.query().preload('sede');
     
        return vetture
        }

    async CreateVetture({request}:HttpContext) {

            await createPostValidatorVetture.validate(request.all(), { messagesProvider:errorMessages })


            const post = await Vetture.create({
             modello: request.input('modello'),
             prezzo: request.input('prezzo'),
             data_immatricolazione: request.input ('data_immatricolazione'),
             marca_id: request.input ('marca_id'),
             sede_id: request.input ('sede_id')
            });
           
            return post
          }
}

