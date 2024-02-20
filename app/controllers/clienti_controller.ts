// import type { HttpContext } from '@adonisjs/core/http'

import Cliente from "#models/Cliente";
import { createPostValidatorClienti } from "#validators/validators";
import { HttpContext } from "@adonisjs/core/http";

export default class ClientiController {

    async clientiAll (){
        const clienti = await Cliente.query();
     
        return clienti
        }


    // async createClienti ({request}:HttpContext){

    //     await createPostValidatorClienti.validate(request.all(), { messagesProvider:errorMessages })

    //     const clienti = await Cliente.create(
    //         {
    //             nome: request.input('nome'),
    //             cognome: request.input('cognome'),
    //             codice_fiscale: request.input('codice_fiscale')
                
    //         }
    //     );
     
    //     return clienti
    //     }

        async createClienti ({request}:HttpContext){

            // await createPostValidatorClienti.validate(request.all(), { messagesProvider:errorMessages })

            await request.validateUsing( createPostValidatorClienti)

            
    
            const clienti = await Cliente.create(
                {
                    nome: request.input('nome'),
                    cognome: request.input('cognome'),
                    codice_fiscale: request.input('codice_fiscale')
                    
                }
            );
         
            return clienti
            }

        }

       
    

