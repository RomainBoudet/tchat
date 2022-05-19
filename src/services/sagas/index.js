
import { 
  watchFetchLogin, 
} from './watchers';
import { all, fork } from 'redux-saga/effects'

function* rootSaga() {

  // mes watchers
  yield all([
    fork(watchFetchLogin),
    //etc...
  ])
}

export default rootSaga;

