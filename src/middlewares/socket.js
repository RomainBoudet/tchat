import {
  WS_CONNECT,
  SEND_NEW_MESSAGE,
  REMOVE_PSEUDO,
  SIGN_OUT,
  saveMessage,
  isConnected,
} from 'src/actions';
import socket from '../websocket';

// Dans WS_CONNECT, je dois dispatcher tous les messages reçu par le serveur, dans le state.
// En ajoutant leur id, author et message a mon action dispatch.
        
// DAns le case SEND_NEW_MESSAGE
// On ne doit plus modifier le state, le case WS_CONNECT s'en charge maintenant !
// le SEND_NEW_MESSAGE, doit s'arréter dans le MW socket avec un socket.emit qui envoie l'author et le message au serveur !


const middleware = (store) => (next) => async (action) => {
  const { input, settings: { pseudo }} = store.getState();


   switch (action.type) {
    case WS_CONNECT: 
        // ici je créer un canal d'échange avec le serveur ! Lancé direct au chargment de l'App.
        // Grace a lui, je vais pouvoir écouter les messages et envoyer des messages
        socket.on('receive_message', (payload) => {
          // Qu'est ce que je vais faire aprés avoir recu mes messages ?
          // je les stock dans mon state via une nouvelle action
          store.dispatch(saveMessage(payload.id, payload.author, payload.message));
          // j'envoie un emit pour dire que je suis connecté !

        })
        socket.on('receive_users', (pseudo) => {
          console.log("pseudo dans le socket.on(receive_users) => ", pseudo);
          // ici pseudo est un array que je vais spread dans le reducer !
          // Qu'est ce que je vais faire aprés avoir recu mes messages ?
          // je les stock dans mon state via une nouvelle action

          //! si on a signout, je ne veux pas recevoir d'info de ma propre deconnexion !
          // et on prend la valeur de isLogged dans ce scope sinon, on a la valeur au démarrage de l'app, qui ne change pas !
          const { settings: { isLogged }} = store.getState();

          console.log("isLogged => ", isLogged);
          if (isLogged || isLogged === 'not_yet') {
            return store.dispatch(isConnected(pseudo));
          };
        })
    return next(action); 
  
     case SEND_NEW_MESSAGE: 

      // je transmet les messages du serveur. Mais au départ, pas de message du tout. 
      socket.emit('tchat_message', {author: pseudo, message: input})
    return next(action);

    case REMOVE_PSEUDO: 
    // je transmet le message au server d'une déconnexion du user en question !
    // le serveur recoit le pseudo, le recherche dans le tableau, sur le serveur, l'enléve et renvoie un nouveau tableau à tous, sans ce pseudo !
    socket.emit('tchat_users', {action: 'del', pseudo});
    return next(action);
    
    default:
      next(action);
  }
};

export default middleware;
