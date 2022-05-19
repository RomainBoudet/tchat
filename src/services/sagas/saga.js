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
  getIsLogged,
  getPseudo,
  getInput,
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

/*  export function* websocketConnect() {

  socket.on('receive_message', function* (payload) {

    yield put(saveMessage(payload.id, payload.author, payload.message));

  });

  socket.on('receive_users', function* (pseudo) {

    const isLogged = yield select(getIsLogged);

    console.log("isLogged => ", isLogged);

    if (isLogged || isLogged === 'not_yet') {
      (console.log("on est dans le isLogged qui va envoyer le dispatch isConnected !"));
      yield put(isConnected(pseudo));
    }; // et sinon, je ne veux rien envoyer ! 
  })
}; */

/* export function* newMessage() {
  console.log("je suis dna sle saga new mesage !");
  const pseudo = yield select(getPseudo);
  const message = yield select(getInput);

  console.log("pseudo dans le saga send new message => ", pseudo);
  console.log("message => ", message);

  socket.emit('tchat_message', {pseudo, message})

}; */

/* export function* removePseudo() {
  console.log("on est dans le removePseudo !");
  const pseudo = yield select(getPseudo);

  console.log("pseudo dans remove pseudo => ", pseudo);

  socket.emit('tchat_users', {action: 'del', pseudo});

}; */
