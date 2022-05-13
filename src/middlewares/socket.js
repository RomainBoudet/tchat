import {
  WS_CONNECT,
  SEND_NEW_MESSAGE,
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
  const { input, settings: { pseudo, isLogged }} = store.getState();


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
          console.log("isLogged => ", isLogged);
          if (isLogged || isLogged === '') {
            (console.log("on est dans le isLogged qui va envoyer le dispatch isConnected !"));
            return store.dispatch(isConnected(pseudo));
          };
        })
    return next(action);
  
    case SEND_NEW_MESSAGE: 

      // je transmet les messages du serveur. Mais au départ, pas de message du tout. 
      socket.emit('tchat_message', {author: pseudo, message: input})
    return next(action);

    case SIGN_OUT: 
    // je transmet le message au server d'une déconnexion du user en question !
    // le serveur recoit le pseudo, le recherche dans le tableau, sur le serveur, l'enléve et renvoie un nouveau tableau à tous, sans ce pseudo !
    //! Le message doit comporter l'information de ajout ou de suppression du pseudo en entrée !
    //! ici je veux emit APRES que la valeur isLogged dans le state soit a fasle, pas avant !
    //! => redux SAGA ! 
    //! => https://tech-wiki.online/fr/redux-saga.html
    socket.emit('tchat_users', {action: 'del', pseudo});
    return next(action);
    
    default:
      next(action);
  }
};

export default middleware;
