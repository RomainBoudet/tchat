import { connect } from 'react-redux';
import Form from '../components/Form';

import {
  changeInput, sendNewMessage
} from '../actions';

// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state) => ({
 input: state.input,
 pseudo: state.settings.pseudo,
});

// Si rien ne doit changer mon state => mapDispatchToProps = {}

// un exemple d'un mapDispatchToProps :
 const mapDispatchToProps = (dispatch) => ({
  onChange: (newValue) => {
    const action = changeInput(newValue);
    dispatch(action);
  },

  onSubmit: () => {
    const action = sendNewMessage();
    dispatch(action);
  },
}); 
 

export default connect(mapStateToProps, mapDispatchToProps)(Form);
