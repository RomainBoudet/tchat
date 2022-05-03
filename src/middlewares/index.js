import axios from 'axios';
/* import {
  FETCH_DATA,
  FETCH_MORE_DATA,
  saveData,
  saveMessage,
  loading,
  activePage,
} from 'src/actions' */;


// Une fonction qui return une fonction qui return une fonction !
// ma fonction n'est plus une fonction mais une promesse avec async devant ! Redux à l'air de gérer ça trés bien ici !

const middleware = (store) => (next) => async (action) => {
  /* switch (action.type) {
    case FETCH_DATA: {
        const state = store.getState();

        store.dispatch(loading(true));

        try {
          const filter = '&sort=star&order=desc&page=1&per_page=12';

          const response = await axios({
            method: 'get',
            url: `${process.env.BASE_URL}${state.inputSearch}${filter}`,
          });
          store.dispatch(saveData(response.data.items));
          store.dispatch(saveMessage(`Votre recherche a donné ${response.data.total_count} résultats !`));
        }
        catch (error) {
          console.trace(error);
        }
        finally {
          store.dispatch(loading(false));
        }

      break;
    }
    
    } 
    default:
      next(action);
  } */
};

export default middleware;
