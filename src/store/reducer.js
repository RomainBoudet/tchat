import {
  CHANGE_INPUT, CHANGE_INPUT_VALIDATE,
  } from '../actions';
  
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
      author: 'Me',
      message: 'Non c\'est pas bon pour ce que t\'a !',
      isOther: false,
    }],
  };
  
  const reducer = (stateActuel = stateInitial, action) => {
    console.log("on est dans le reducer !!");

  // j'éxamine le .type de chaque action !
     switch (action.type) {
       case CHANGE_INPUT:
        return {
          ...stateActuel,
          input: action.input,
        };
        case CHANGE_INPUT_VALIDATE:
          return {
            ...stateActuel,
            inputValidate: action.inputValidate,
          };
  
      default:
        return stateActuel;
    } 
  };
  
  export default reducer;

    //! stop au boolan pour loading : https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns#loading-state-enum-values
