/* eslint-disable max-len */
import { connect } from 'react-redux';
import Messages from '../components/Messages';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
