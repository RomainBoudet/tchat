/* eslint-disable max-len */
import { connect } from 'react-redux';
import Header from '../components/Header';

/* import {
  changeInputSearch, changeInputValidate, fetchData, saveData, saveMessage,
} from '../actions'; */

// nom par convention, recoit le state comme propriété
// avec state.quelqueChose, je donne des props qui viennent du state.
// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state) => ({
  message: state.subReducer1.message,
});

// Si rien ne doit changer mon state => mapDispatchToProps = {}
const mapDispatchToProps = {};

// un exemple d'un mapDispatchToProps :
/* const mapDispatchToProps = (dispatch) => ({
  onChange: (newValue) => {
    // Ce qui est dans mon dossier actions
    const action = changeInputSearch(newValue);
    dispatch(action);
  },
  // provient de mon composant
  onSubmit: (newValidate) => {
    dispatch(changeInputValidate(newValidate));
    if (newValidate === '') {
      dispatch(saveData([]));
      dispatch(saveMessage('Effectuez une recherche pour connaitre le nombre de résultat disponible...'));
      return;
    }
    const action = fetchData();
    dispatch(action);
  },
}); */
 
/* const createContainer = connect(mapStateToProps, mapDispatchToProps);
const monContainer = createContainer(Header);
export default monContainer; */

// J'éxécute connect en lui filant mapStateToProps et mapDispatchToProps qui
// va me renvoyer une nouvelle fonction. Cette fonction attend que je l'exécute
// en lui donnant un argument : Le composant à qui je veux donner tous les props !

// Et j'exporte ce contaner qui sera utilisé dans App a la place du Dumb componant initial !
// l'ordre a une importance : 1er arguments state 2iém arguments dispatch.
export default connect(mapStateToProps, mapDispatchToProps)(Header);

// Ordre de travail :
// 1) Je réalise on composant (dumb componant). Je lui donne les props qu'il a besoin.
// 2) Je construit mon container (smart componant). Pour faire le lien avec Redux.
// je me demande si mon composant a besoin de consulteer le state ? si Non => mapStateToProp = null
// Je me demande si mon composant a besoin de dispatcher des actions ? Si non, mapsDispatchToProps = {}
// Si oui, je lui passe ce qu'attend mon dumb composant !
