
import vine, { SimpleMessagesProvider } from "@vinejs/vine";

// import { SimpleMessagesProvider } from "@vinejs/vine"

// vine.messagesProvider = new SimpleMessagesProvider({
//   // Applicable for all fields
//   'required': 'The {{ field }} field is required',
//   'string': 'The value of {{ field }} field must be a string',
//   'email': 'The value is not a valid email address',

//   // Error message for the username field
//   'username.required': 'Please choose a username for your account',
// })


export const createPostValidator = vine.compile(
    vine.object({
      nome: vine.string().trim().maxLength(32),
      comune: vine.string().trim().maxLength(64),
    })
  )

  export const createPostValidatorVetture = vine.compile(
    vine.object({
      modello: vine.string().trim().maxLength(32),
      prezzo: vine.string().trim(),
      data_immatricolazione: vine.date({ formats:['YYYY-DD-MM']}).nullable(),
      sede_id: vine.string().trim().maxLength(64),
    })
  )


  export const createPostValidatorOrdini = vine.compile(
    vine.object({
      cliente_id: vine.string().trim().maxLength(32),
      vettura_id: vine.string().trim().maxLength(32),
      data_ordine : vine.date({ formats:['YYYY-DD-MM']}),
      data_consegna: vine.date({ formats:['YYYY-DD-MM']}).nullable(),
    })
  )

 export const createPostValidatorMarche = vine.compile(
      vine.object(
        {
          marche: vine.string().trim().minLength(4),
        }
      )
 )

 export const createPostValidatorClienti = vine.compile(
  vine.object(
    {
      nome: vine.string().trim().maxLength(32).optional(),
      cognome: vine.string().trim().maxLength(32).optional(),
      codice_fiscale: vine.string().maxLength(16)
      
    }
  )
)




  


  /**
   * Validates the post's update action
   */
//   export const updatePostValidator = vine.compile(
//     vine.object({
//       title: vine.string().trim().minLength(6),
//       description: vine.string().trim().escape()
//     })
//   )

