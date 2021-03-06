import {
  CHANGE_INPUT, SAVE_MESSAGE, TOGGLE_SETTINGS, CHANGE_INPUT_FIELD, SAVE_PSEUDO, LOADING, UNAUTHORIZED, SET_COLOR, SIGN_OUT, IS_CONNECTED, REMOVE_PSEUDO,
  } from '../actions';
  // import { hightestID } from '../selector';
  
  export const stateInitial = {
    input: '',
    settings: {
      pseudo: '',
      color: '',
      email: '',
      password: '',
      open: false,
      loading: false,
      unauthorized: '',
      color: '',
      isLogged: 'not_yet',

    },
    messages: [],
    users: [],
  };
  
const reducer = (state = stateInitial, action = {}) => {

  // j'éxamine le .type de chaque action !
     switch (action.type) {
       case CHANGE_INPUT:
        return {
          ...state,
          input: action.input,
        };
          case TOGGLE_SETTINGS:
            return {
              ...state,
              settings: {
                ...state.settings,
                open: !state.settings.open,
              }
            };
            case CHANGE_INPUT_FIELD:
            return {
              ...state,
              settings: {
                ...state.settings,
                [action.fieldName]: action.value,
                // valeur de la propriété dynamique ! On récupéres la valeur d'une clé qui change !
                unauthorized: false,
                // remise a false: permet de renvoyer le segment erreur si new bad input
              }
            };
            case SAVE_PSEUDO:
            return {
              ...state,
              settings: {
                ...state.settings,
                pseudo: action.pseudo,
                password: '',
                email: '',
                open: false,
                unauthorized: false,
                isLogged: true,
              },
              users: [
              ...state.users,
              ]
            };
            case LOADING:
            return {
              ...state,
              settings: {
                ...state.settings,
                loading: action.bool, 
              }
            };
            case UNAUTHORIZED:
            return {
              ...state,
              settings: {
                ...state.settings,
                unauthorized: action.bool, 
              }
            };
            case SET_COLOR:
            return {
              ...state,
              settings: {
                ...state.settings,
                color: action.color, 
              }
            };
            case SAVE_MESSAGE:
            return {
              ...state,
              input: '',
              messages: [
                ...state.messages,
                 {
                  id: action.id,
                  author: action.author,
                  message: action.message,
                  isOther: false,
                  },
                 ],
              };
              case SIGN_OUT:
            return {
              ...stateInitial,
              settings: {
                ...stateInitial.settings,
                pseudo: state.settings.pseudo,
                isLogged: false,
                }
              };
              case REMOVE_PSEUDO:
            return {
              ...stateInitial,
              settings: {
                ...stateInitial.settings,
                isLogged: false,
                }
              };
              case IS_CONNECTED:
            return {
              ...state,
              users: [
                ...action.pseudo,
                 ],
              };
      default:
        return state;
    } 
  };
  
  export default reducer;

    //! stop au boolan pour loading : https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns#loading-state-enum-values
