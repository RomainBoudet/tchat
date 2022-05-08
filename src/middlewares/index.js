import axios from 'axios';
import {
  FETCH_LOGIN,
  savePseudo,
  loading,
  unauthorized,
} from 'src/actions'


// Une fonction qui return une fonction qui return une fonction !
// ma fonction n'est plus une fonction mais une promesse avec async devant ! Redux à l'air de gérer ça trés bien ici !

const middleware = (store) => (next) => async (action) => {
   switch (action.type) {
    case FETCH_LOGIN: {
        const state = store.getState();
        store.dispatch(loading(true));

        try {
          const response = await axios({
            method: 'post',
            url: `http://localhost:3001/login`,
            data: {
              email: state.settings.email,
              password: state.settings.password,
            }
          });
          store.dispatch(savePseudo(response.data.pseudo));
        }
        catch (error) {
          // console.trace(error);
          store.dispatch(unauthorized(true));

          // je pourrasi aussi récupérer l'érreur du serveur pour la mettre dans le state...
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
