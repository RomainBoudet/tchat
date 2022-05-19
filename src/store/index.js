import { configureStore } from '@reduxjs/toolkit';



import rootReducer from './reducer';
// import rootMiddleware from '../middlewares';
import socketMiddleware from '../middlewares/socket'


// Saga !
// NOTE : je crée mon saga MW et je lance la saga principale : rootSaga, on démarre au lancement de l'application nos watcher, avec nos take et takeLatest
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../services/sagas'
const sagaMiddleware = createSagaMiddleware();


// https://redux-toolkit.js.org/api/configureStore

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware, sagaMiddleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootMiddleware, socketMiddleware),
  devTools: true,
  // preloadedState,
});
//! je lance mon rootSaga :
sagaMiddleware.run(rootSaga);


export default store;
