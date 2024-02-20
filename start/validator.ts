import  { SimpleMessagesProvider } from '@vinejs/vine'

export const  errorMessages= new SimpleMessagesProvider({
  // Applicable for all fields
  'required': 'The {{ field }} è obbligatorio',
  'string': 'The value of {{ field }} field must be a string',
  'email': 'The value is not a valid email address',

  // Error message for the username field
  'username.required': 'Please choose a username for your account',
})