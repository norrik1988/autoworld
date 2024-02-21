// import type { HttpContext } from '@adonisjs/core/http'

import Cliente from "#models/Cliente";
import Ordine from "#models/Ordine";
import { createPostValidatorClienti } from "#validators/validators";
import { HttpContext } from "@adonisjs/core/http";
import db from '@adonisjs/lucid/services/db'
import { DateTime } from "luxon";




export default class ClientiController {

    async clientiAll (){
        const clienti = await Cliente.query();
     
        return clienti
        }



    async createClienti ({request}:HttpContext){

            // await createPostValidatorClienti.validate(request.all(), { messagesProvider:errorMessages })

            const clienteValidato = await request.validateUsing( createPostValidatorClienti) 
            const clienti = await Cliente.create(
                {
                    nome: clienteValidato.nome,
                    cognome: clienteValidato.cognome,
                    codice_fiscale: clienteValidato.codice_fiscale
                    
                }
            );
         
            return clienti
            }


    async createClientiOrdineNuovoDb({request}:HttpContext) { 
                    await db.transaction( async (trx) => {
                    const cliente = new Cliente()
                    cliente.nome = 'Alessandro'
                    cliente.cognome = 'Allegro'
                    cliente.codice_fiscale = 'LSSLLG56H78J996K'
                    await cliente.useTransaction(trx).save()
                    // throw new Error("err");
                    const ordine = new Ordine()
                    ordine.cliente_id = cliente.id
                    ordine.vettura_id = request.input ('macchina selezionata')
                    ordine.data_ordine  = DateTime.now ()
                    ordine.data_consegna = null
                    await ordine.useTransaction(trx).save()

                    //aggiornata stato venduto o meno
                    await ordine.related('vetture').query().update({venduta: true})

        }) 
           
        }

    async getClientiAllQR() {    
        const queryWithTableSelection = db.from('clienti')
        console.log(queryWithTableSelection)
        return queryWithTableSelection
    }

    async getClientiAllRQ() {
        const clientiQR = await db.rawQuery('select * from clienti')
        return clientiQR

    }

    async findClienteByIdRQ() {
        const clienteID = await db.rawQuery(
            'select * from clienti where id = ?',
            [6]
          )
          
        return clienteID

          // SELECT * FROM "users" WHERE "id" = 1
    }

    

    }
    

