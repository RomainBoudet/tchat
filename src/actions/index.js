// ACTIONS TYPES

// Pour éviter les fautes, et profiter de l'autocompletion, on met la string en variable !
// Par convention, on nomme la string comme le nom de la variable, en MAJUSCULE.
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_INPUT_EMAIL = 'CHANGE_INPUT_EMAIL';
export const CHANGE_INPUT_PASSWORD = 'CHANGE_INPUT_PASSWORD';


// ACTIONs CREATORS

// je fais une fonction pour fabriquer un objet d'action
// On devrait également suivre la convention FSA du flux standart d'action ! 
// propriété payload et pas autre chose ! 

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

export const sendNewMessage = () => ({
  type: SEND_NEW_MESSAGE,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const onChangeEmail = (email) => ({
  type: CHANGE_INPUT_EMAIL,
  email,
})

export const onChangePass = (pass) => ({
  type: CHANGE_INPUT_PASSWORD,
  pass,
})

// FSA : https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns 
// https://github.com/redux-utilities/flux-standard-action#motivation

/* And if you write your actions using the FSA pattern, an action MAY

have a payload field
have an error field
have a meta field
Detailed Explanation: FSAs and Errors
The FSA specification says that:

The optional error property MAY be set to true if the action represents an error. An action whose error is true is analogous to a rejected Promise. By convention, the payload SHOULD be an error object. If error has any other value besides true, including undefined and null, the action MUST NOT be interpreted as an error.

The FSA specs also argue against having specific action types for things like "loading succeeded" and "loading failed".

However, in practice, the Redux community has ignored the idea of using action.error as a boolean flag, and instead settled on separate action types, like 'todos/todosLoadingSucceeded' and 'todos/todosLoadingFailed'. This is because it's much easier to check for those action types than it is to first handle 'todos/todosLoaded' and then check if (action.error).

You can do whichever approach works better for you, but most apps use separate action types for success and failure. */
