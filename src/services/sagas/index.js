
import { 
  watchFetchLogin, 
  watchWebsocket, 
  // watchNewMessage, 
  watchRemovePseudo,
} from './watchers';
import { all, fork } from 'redux-saga/effects'

function* rootSaga() {

  // mes watchers
  yield all([
    fork(watchFetchLogin),
    // fork(watchWebsocket),
    // fork(watchNewMessage),
    // fork(watchRemovePseudo),
    //etc...
  ])
}

export default rootSaga;

