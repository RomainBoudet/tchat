import {
  WS_CONNECT,
  SEND_NEW_MESSAGE,
  saveMessage,
} from 'src/actions'
import { io } from 'socket.io-client';


// Dans WS_CONNECT, je dois dispatcher tous les messages reçu par le serveur, dans le state.
// En ajoutant leur id, author et message a mon action dispatch.
        
// DAns le case SEND_NEW_MESSAGE
// On ne doit plus modifier le state, le case WS_CONNECT s'en charge maintenant !
// le SEND_NEW_MESSAGE, doit s'arréter dans le MW socket avec un socket.emit qui envoie l'author et le message au serveur !


let socket = null;
const middleware = (store) => (next) => async (action) => {
  const { input, settings: { pseudo }} = store.getState();

   switch (action.type) {
    case WS_CONNECT: 
        // ici je créer un canal d'échange avec le serveur ! Lancé direct au chargment de l'App.
        // Grace a lui, je vais pouvoir écouter les messages et envoyer des messages
        // socket = io('http://localhost:3005');
        socket = io('http://localhost:3005', { transports : ['websocket', 'polling', 'flashsocket'] });
        socket.on('receive_message', (payload) => {
          // Qu'est ce que je vais faire aprés avoir recu mes messages ?
          // je les stock dans mon state via une nouvelle action
          store.dispatch(saveMessage(payload.id, payload.author, payload.message));

        })
    return next(action);
  
    case SEND_NEW_MESSAGE: 

      // je transmet les messages du serveur. Mais au départ, pas de message du tout. 
      socket.emit('tchat_message', {author: pseudo, message: input})
  return next(action);
  
    default:
      next(action);
  }
};

export default middleware;
