// EFFETS : Instructions pour des opérations à faire. Objet qui contiennent des informations qui devront être intéreprété par le MW

//! call : effet bloquant, le générteur s'arréte, j'attend le retour de l'instruction avant de passer à la suite
/* 
function* fetchProduct() {
  const products = yield call(Api.fetch, '/products')
  NOTE: On attend le retour pour continuer !
  / gére la réponse...
}

*/

//! put : envoie une nouvelle action redux
/* 
function* fetchProduct() {
  const product = yield call (Api.fetch, /'products')
  / create and yield a dispatch effect
  NOTE: j'emmet une new action avec les données de l'appel a l'API
  yiel put({ type: 'PRODUCT_RECEIVED', products })
}
*/


//! take : écoute une action, et effectue le traitement choisie
/* 
function* loginFlow() {
  while (true) {
    yield take('LOGIN')
    NOTE: si l'action LOGIN passe je fait ça...
    /.. gere la logique...
    yield take('LOGOUT')
    NOTE: si l'action LOGOUT passe je fait çi...
    /.. gére la logique...
  }
}
*/

//! takeLatest : écoute une action et délégue le traitemnt donné a une saga, mais peut annuler un appel en cours, pour prendre le dernier, différent du takeEvery
// si multiple appel, annule les précédents et ne prend que le dernier !
/* 
function* watchFetchProducts() {
  NOTE: le 2ime paramétre est la saga qui va être déclenchée..
  yield takeLatest ('PRODUCT_REQUESTED', fetchProducts)
}
*/


//! fork : à la différence du call, pas bloquant, retour du fork qu'on peut annuler,
//! Appel a la function authorize effectué et on continue derriere
//! ici je peux anuler ma tache authorize si une action Logout intervient dans la foulée !
/* 
function* loginFlow() {
  while (true) {
    const {user, password} = yield take ('LOGIN_REQUEST')
    / fork return a task object
    NOTE: fork est non bloquant, et constitue ce qu'on appel une tache...
    const task = yield fork(authorize, user, password)
    NOTE: on ecoute soit LOGOUT soit LOGIN_ERROR apres le fork vu que c'est non bloquant...
    const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
    if (action.type === 'LOGOUT')
    NOTE: une action LOGOUT arrive, je peux annuler cette tache !
    yiel cancel(task)
    yield call(Api.clearItem, 'token')
  }
}

*/


//! select : lire de l'iformation dans le store redux

/* 
NOTE un selecteur redux
export const getToken = state => state.token

function* getSomething() {
   / query the state using the exported selector
   NOTE: on lui passe un selecteur redux classique, et je peux lire de l'info provenant du store redux..
  const cart = yield select(getToken)
   / ...
}

*/

//! Dans un rootSaga, je lance tous mes watchers, avec tous mes effet take et takeLatest, 
//! et attendent la bonne action REDUX pour laquelle ils sont lié
// Je démarre au lancement de l'application tous mes watchers, soit toutes mes sagas, qui se lancent toutes en paralléles, 
// en train d'attendre la bonne action redux auxquel ils sont lié pour faire le bon traitement

/* 

import watchFetchProducts from './watchFetchProducts'
function* rootSaga() {
  // mes watchers
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchOrders),
    //etc...
  ])
}

export default rootSaga; */

//! dans un autre fichier j'aurais mes sagas :
//! avec un takeLatest qui écoute mon action, mon premier watcher : 

/* 
import {PRODUCT_REQUESTED} from 'src/actions';
import { takeLatest } from `redux-saga/effects`

export default function* watchFetchProducts() {
  yield takeLatest('PRODUCT_REQUESTED', FetchProducts);
} 
*/
//! ce watcher délégue l'action a une autre saga : FetchProduct :

/* 
function* fetchProduct(){
  NOTE : je récupére mon token dans le state
  const token = yield select(getToken);
  NOTE : mon appel API en lui passant le token

  const { response, error } = yield call (Api.fetch, '/products', token)
  NOTE : je pourrais aussi gérer ça via un try catch dans le saga aussi !
  if (!error) {
    yield put ({ type: 'PRODUCT_REQUESTED_SUCESS', data:response.data})
  } else {
    yield put ({ type: 'PRODUCT_REQUESTED_ERROR', error })
  }

}
*/ 

//! Pour tester : je dois tester les intentions de la saga.
// mais on reste contraint par le générateur...
// je dois suivre l'éxécution du générateur pas a pas, et ce principe d'entrée sortie à chaque fois.
//! je ne peux pas tester juste la fin, que ma saga emette une action de succées ou d'érreur !
/* 
describe('fetchProduct', () => {
  test('Devrait récupérer les produit avec succés', () => {
    const tokenMock = 'token';
    const responseMock = { response: {data: [] }};

    const generator = fetchProducts();

    NOTE : je teste que ma saga ait bien l'intention d'appeler un selecteur
    expect(generator.next().value).toEqual(select(getToken));
    NOTE : je simule tokenMock soit bien revenu du select avec une const
    expect(generator.next(tokenMock).value).toEqual(
      call(Api.fetch, '/products' tokenOck)
    );
    NOTE : j'ai pas tester le call en lui même mais j'ai construit un petit objet avec une response pour que mon générateur, quand il continue l'execution, 
    NOTE : je passe dans le cas d'échec ou d'érreur
    exprect(generator.next(reponseMock).value).toEqual(
      put({type: 'PRODUCTS_REQUESTED_SUCESS', data: responseMock.data })
    );
  });
});
*/

//! Avec redux-saga-test-plan (https://www.npmjs.com/package/redux-saga-test-plan), je n'ai pas a tester tous les effet de la saga, 

//! Avec redux-saga-test-plan :
/* 
describe('fetchProduct', () => {
  test('Devrait récupérer les produit avec succés', () => {
    const tokenMock = 'token';
    const responseMock = { response: {data: [] }};

    NOTE : expectSaga vient de saga test plan :
    return expectSaga(fetchProducts)
    .provide([
      [select(getToken), tokenMoch]
    ])
    .put({
      type: 'PRODUCTS_REQUESTED_SUCESS',
      data: responseMock.response.data,
    })
    .dispatch({ type: 'PRODUCT_REQUESTED'})
    .run();
  });
});
*/
