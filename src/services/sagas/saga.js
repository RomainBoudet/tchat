import socket from '../../websocket';
import {
  savePseudo,
  loading,
  unauthorized,
  setColor,
} from 'src/actions';
import API from '../../API/request';
import {
  getEmail,
  getPass,
} from '../../selector';
import {
  call,
  putResolve,
  select,
  put,
} from 'redux-saga/effects'



export function* fetchLogin() {

  const email = yield select(getEmail);
  const pass = yield select(getPass);

    yield put(loading(true));

    const { error, data: {pseudo} } = yield call(API.fetchLogin, email, pass);

    if (!error) {
      // pas d'érreur : 
      
      yield putResolve(savePseudo(pseudo));
      socket.emit('tchat_users', {
        action: 'add',
        pseudo: pseudo
      });
      const {data: {color}} = yield call(API.fetchTheme, email);
      yield put(setColor(color));

    } else {
      // présence d'une érreur !
      yield put(unauthorized(true))
    }
  
    yield put(loading(false));
  

};
