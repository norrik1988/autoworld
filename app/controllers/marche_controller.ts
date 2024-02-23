// import type { HttpContext } from '@adonisjs/core/http'

import Marche from "#models/Marca";
import { createPostValidatorMarche } from "#validators/validators";
import { HttpContext } from "@adonisjs/core/http";
import db from "@adonisjs/lucid/services/db";

export default class MarcheController {

    async marcheAll (){
        const marche = await Marche.query();
     
        return marche
        }


    async createMarche ({request}:HttpContext){

        await request.validateUsing( createPostValidatorMarche)

        const marche = await Marche.create(
            {
                nome: request.input('nome')
            }
        );
     
        return marche
        }

    async patchMarche({request, params}: HttpContext) {
            const modMarche = await Marche.findOrFail(params.id)
            modMarche.nome = request.input('nome')
            await modMarche.save()
            return modMarche
        }

    async deleteMarche ({params}: HttpContext) {

        const cliente = await Marche.findOrFail(params.id);
        await cliente.delete();
    
        return cliente
    
        }

    //qb
    
    async deleteMarcheQB ({params}: HttpContext) {

        const marche = db
        .from('marche')
        .where('id', params.id)
        .delete()

        return marche
        
    }

     //rq

     async deleteMarcheRQ () {
        const marche = await db.rawQuery ('DELETE FROM marche WHERE id = ?', [7])

        return marche
     }
}