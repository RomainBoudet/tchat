import {
  CHANGE_INPUT, SEND_NEW_MESSAGE,
  } from '../actions';

  import { hightestID } from '../selector';
  
  const stateInitial = {
    input: '',
    messages: [{
      id: 1,
      author: 'Super Chat',
      message: 'Salut ça va ?',
      isOther: true,
    },
    {
      id: 2,
      author: 'Super Chat',
      message: 'T\'a pas des super croquettes ?',
      isOther: true,
    },
    {
      id: 3,
      author: 'Super Chat',
      message: 'Stp !',
      isOther: true,
    },
    {
      id: 4,
      author: 'Moi',
      message: 'Non c\'est pas bon pour ce que t\'a !',
      isOther: false,
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
              author: 'Moi',
              message: state.input,
              isOther: false,
              }
            ],
            input: '',
          };
  
      default:
        return state;
    } 
  };
  
  export default reducer;

    //! stop au boolan pour loading : https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns#loading-state-enum-values
