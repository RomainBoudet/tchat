// ACTIONS TYPES

// Pour éviter les fautes, et profiter de l'autocompletion, on met la string en variable !
// Par convention, on nomme la string comme le nom de la variable, en MAJUSCULE.
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_INPUT_FIELD = 'CHANGE_INPUT_FIELD';
export const FETCH_LOGIN = 'FETCH_LOGIN';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const LOADING = 'LOADING';
export const UNAUTHORIZED = 'UNAUTHORIZED';
export const SET_COLOR = 'SET_COLOR';
export const WS_CONNECT = 'WS_CONNECT';
export const SAVE_MESSAGE = 'SAVE_MESSAGE';
export const SIGN_OUT = 'SIGN_OUT';

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

export const onChangeField = (fieldName, value) => ({
  type: CHANGE_INPUT_FIELD,
  fieldName,
  value,
})

export const fetchLogin = () => ({
  type: FETCH_LOGIN,
});

export const savePseudo = (pseudo) => ({
  type: SAVE_PSEUDO,
  pseudo,
});

export const loading = (bool) => ({
  type: LOADING,
  bool,
});

export const unauthorized = (bool) => ({
  type: UNAUTHORIZED,
  bool,
});

export const setColor = (color) => ({
  type: SET_COLOR,
  color,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const saveMessage = (id, author, message) => ({
  type: SAVE_MESSAGE,
  id,
  author,
  message,
});

export const signOut = () => ({
  type: SIGN_OUT,
});


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
