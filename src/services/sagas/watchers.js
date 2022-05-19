import { take, takeLatest} from 'redux-saga/effects'
import { fetchLogin, websocketConnect, newMessage, removePseudo } from './saga';
import {
  FETCH_LOGIN, WS_CONNECT, SIGN_OUT, SEND_NEW_MESSAGE, REMOVE_PSEUDO,
} from 'src/actions';

export function* watchFetchLogin() {
  yield takeLatest(FETCH_LOGIN, fetchLogin)
};

/* export function* watchWebsocket() {
  yield take(WS_CONNECT, websocketConnect)
}; */

/* export function* watchNewMessage() {
  yield take(SEND_NEW_MESSAGE, newMessage)
}; */

/* export function* watchRemovePseudo() {
  yield take(REMOVE_PSEUDO, removePseudo)
}; */
