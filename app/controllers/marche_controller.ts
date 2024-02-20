// import type { HttpContext } from '@adonisjs/core/http'

import Marche from "#models/Marca";
import { createPostValidatorMarche } from "#validators/validators";
import { HttpContext } from "@adonisjs/core/http";

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
}