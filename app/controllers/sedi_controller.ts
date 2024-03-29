// import type { HttpContext } from '@adonisjs/core/http'

import Sede from "#models/Sede";
import Sedi from "#models/Sede";
import { HttpContext } from "@adonisjs/core/http";
import { createPostValidator } from "#validators/validators"; 
import db from "@adonisjs/lucid/services/db";


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

      // await createPostValidator.validate(request.all(), { messagesProvider:errorMessages })

      await request.validateUsing( createPostValidator)

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

   async incassoSede() { 
      
      const res = await db
                              .from('ordini')
                              .select ('sede_id')
                              .sum('importo_vendita')
                              .groupBy('sede_id')
                              .as('incassi_totale')
                        
      
     return res
  
}

   async deleteSedi ({params}: HttpContext) {

            const sede = await Sedi.findOrFail(params.id);
            await sede.delete();

            return sede

            }


}


