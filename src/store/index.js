import { configureStore } from '@reduxjs/toolkit';

import reducer from '../reducer';
import rootMiddleware from '../middlewares';

/*  const preloadedState = {

  message: 'Une jolie app avec react V18 et redux !',
  messageMain: 'Le message de mon main.'
} ; */

// https://redux-toolkit.js.org/api/configureStore

const store = configureStore({
  reducer: reducer,
  middleware: [rootMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState,
});


export default store;
