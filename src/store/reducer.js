import {
  CHANGE_INPUT, SEND_NEW_MESSAGE, TOGGLE_SETTINGS, CHANGE_INPUT_FIELD, SAVE_PSEUDO, LOADING, UNAUTHORIZED, SET_COLOR
  } from '../actions';

  import { hightestID } from '../selector';
  
  const stateInitial = {
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

    },
    messages: [{
      id: 1,
      author: 'Super Chat',
      message: 'Salut ça va ?',
    },
    {
      id: 2,
      author: 'Super Chat',
      message: 'T\'a pas des super croquettes ?',
    },
    {
      id: 3,
      author: 'Super Chat',
      message: 'Stp !',
    },
    {
      id: 4,
      author: 'Mon pseudo',
      message: 'Non c\'est pas bon pour ce que t\'a !',
    }],
  };
  
  const reducer = (state = stateInitial, action) => {

  // j'éxamine le .type de chaque action !
     switch (action.type) {
       case CHANGE_INPUT:
        return {
          ...state,
          input: action.input,
        };
        case SEND_NEW_MESSAGE:
          return {
            ...state,
            messages: [
              ...state.messages,
              {
              id: (hightestID(state.messages) + 1),
              author: state.settings.pseudo,
              message: state.input,
              }
            ],
            input: '',
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
              }
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
      default:
        return state;
    } 
  };
  
  export default reducer;

    //! stop au boolan pour loading : https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns#loading-state-enum-values
