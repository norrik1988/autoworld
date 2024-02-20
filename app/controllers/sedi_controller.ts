// import type { HttpContext } from '@adonisjs/core/http'

import Sede from "#models/Sede";
import Sedi from "#models/Sede";
import { HttpContext } from "@adonisjs/core/http";
import { createPostValidator } from "#validators/validators"; 
import { errorMessages } from "#validators/messages";

export default class SediController {


   async sediAll (){
   const sedi = await Sedi.query().preload('vetture');

   return sedi
   }

   // async sediNew () {

   //    const nuovaSede =await Sedi.create(
   //       {
   //          nome: 'sede4',
   //          comune: 'Frattamaggiore'
   //       }
          
   //    ) 
   //    return nuovaSede
      
   // }

   async createSedi({request}:HttpContext) {

      await createPostValidator.validate(request.all(), { messagesProvider:errorMessages })

     const post = await Sede.create({
      nome: request.input('nome'),
      comune: request.input('comune')
     });
     
     

     return post
   }

   // async sediNew2(){
   //    const sedi2 = await Sedi.createMany(
   //       [
   //          { nome: 'sede5',
   //          comune: 'PolennaTrocchia'},

   //          { nome: 'sede6',
   //          comune: 'Portici'}
   //       ]
   //    );
   
   //    return sedi2
   //    }

   async modificaSede() {
      const modificaSede = await Sedi.findOrFail(1)  
                           modificaSede.nome = 'NomeNuovo pasta e patate 11'
                           await modificaSede?.save()

                           return modificaSede
   }

   async updateSedeById({request,params}: HttpContext){
        
      const modSede = await Sede.findOrFail(params.id)
      modSede.comune = request.input('comune')
      await modSede.save()
      return modSede
   
   }


}


