/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import ClientiController from '#controllers/clienti_controller'
import MarcheController from '#controllers/marche_controller'
import OrdiniController from '#controllers/ordini_controller'
import SediController from '#controllers/sedi_controller'
import VettureController from '#controllers/vetture_controller'
import router from '@adonisjs/core/services/router'

router.group (()=> {
    
            router.get('/sedi', [SediController, 'sediAll'])

            router.post('/createSedi', [SediController, 'createSedi'])

            router.patch('/modificaSede', [SediController, 'modificaSede'])

            router.patch('/updateSedeBy/:id', [SediController, 'updateSedeById'])

            router.get('/marche', [MarcheController, 'marcheAll'])

            router.get('/vetture', [VettureController, 'vettureAll'])

            router.post('/CreateVetture', [VettureController, 'createVetture'])

            router.get('/clienti', [ClientiController, 'clientiAll'])

            router.post('/createClienti', [ClientiController, 'createClienti'])

            router.post('/createClientiDb', [ClientiController, 'createClientiOrdineNuovoDb'])

            router.get('/ordini', [OrdiniController, 'ordiniAll'])

            router.post('/createOrdini', [OrdiniController, 'createOrdini']) })

            router.patch('/patchClienti', [ClientiController, 'patchClienti'])

            router.patch('/patchMarche/:id', [MarcheController, 'patchMarche'])

            router.delete('/deleteCliente/:id', [ClientiController, 'deleteCliente'])

            router.delete('/deleteMarche/:id', [MarcheController, 'deleteMarche'])
            
            .prefix('orm')

router.group (()=> {
            router.get('/getClientiAllQB', [ClientiController, 'getClientiAllQB'])

            router.get('/incassoSede', [SediController, 'incassoSede'])

            router.post('/createClienteQB', [ClientiController, 'createClienteQB'])
                }).prefix('qb')

router.group (()=> {
            router.get('/getClientiAllRQ', [ClientiController, 'getClientiAllRQ'])

            router.get('/findClienteByIdRQ', [ClientiController, 'findClienteByIdRQ'])
            
            router.get('/FindOrdineByIdRQ', [OrdiniController, 'FindOrdineByIdRQ'])

            router.get('vettureComparision', [VettureController, 'vettureComparision'])

            router.post('/createClienteRQ', [ClientiController, 'createClienteRQ'])
            
                }).prefix('rq')