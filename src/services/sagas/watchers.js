import { take, takeLatest} from 'redux-saga/effects'
import { fetchLogin} from './saga';
import {
  FETCH_LOGIN,
} from 'src/actions';

export function* watchFetchLogin() {
  yield takeLatest(FETCH_LOGIN, fetchLogin)
};
