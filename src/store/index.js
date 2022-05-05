import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../reducer/subReducer1';
import rootMiddleware from '../middlewares';


// https://redux-toolkit.js.org/api/configureStore

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState,
});


export default store;
