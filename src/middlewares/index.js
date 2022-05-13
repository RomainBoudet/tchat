import axios from 'axios';
import {
  FETCH_LOGIN,
  SAVE_PSEUDO,
  savePseudo,
  loading,
  unauthorized,
  setColor,
} from 'src/actions';
import socket from '../websocket';


// Une fonction qui return une fonction qui return une fonction !
// ma fonction n'est plus une fonction mais une promesse avec async devant ! Redux à l'air de gérer ça trés bien ici !

const middleware = (store) => (next) => async (action) => {
  const {settings: {email, password}} = store.getState();

   switch (action.type) {
    case FETCH_LOGIN: {
        store.dispatch(loading(true));

        try {
          const response = await axios({
            method: 'post',
            url: `http://localhost:3005/login`,
            data: {
              email: email,
              password: password,
            }
          });
          store.dispatch(savePseudo(response.data.pseudo));
          console.log("response.data.pseudo dans le MW index => ", response.data.pseudo);
          // J'envoie un message au serveur lui signifiant qu'un nouvel user est connecté !
          console.log("on est juste avant le emit dans le index MW !");
          socket.emit('tchat_users', {action: 'add', pseudo: response.data.pseudo});
        }
        catch (error) {
          // console.trace(error);
          store.dispatch(unauthorized(true));

          // je pourrais aussi récupérer l'érreur du serveur pour la mettre dans le state...
          // si 401 => Pas autoriser à se connecter, je gére l'info du serveur !
        }
        finally {
        store.dispatch(loading(false));
        }

      break;
    } 
    case SAVE_PSEUDO: {
      store.dispatch(loading(true));
      try {
        const response = await axios({
          method: 'get',
          url: `http://localhost:3005/theme/${email}`,
        });
        store.dispatch(setColor(response.data.color));

        next(action); // j'oublie pas de next cette action que j'ai intercepté !
      }
      catch (error) {
        console.trace(error);
        //store.dispatch(unauthorized(true));

        // je pourrais aussi récupérer l'érreur du serveur pour la mettre dans le state...
        // si 401 => Pas autoriser a se connecter, je gére l'info du serveur !
      }
      finally {
      store.dispatch(loading(false));
      }

    break;
  } 
    
    default:
      next(action);
  }
};

export default middleware;
