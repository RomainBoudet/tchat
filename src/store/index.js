import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducer';
import rootMiddleware from '../middlewares';
import socketMiddleware from '../middlewares/socket'


// https://redux-toolkit.js.org/api/configureStore

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootMiddleware, socketMiddleware),
  devTools: true,
  // preloadedState,
});


export default store;
