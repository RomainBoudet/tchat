// Notre reducer global
import { combineReducers } from 'redux';
import subReducer1 from './subReducer1';
import subReducer2 from './subReducer2';


// Import des reducers

const globalReducer = combineReducers({
  // ici chaque propriétés correspondra à un mini reducer
  subReducer1,
  subReducer2,
  //  reducer,
  //  reducer,
});

export default globalReducer;
