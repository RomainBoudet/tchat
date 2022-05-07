import { connect } from 'react-redux';
import { onChangeEmail } from 'src/actions';
import InputEmail from '../../components/Settings/inputEmail';

// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state, ownProps) => ({
 email: state.settings.email,
});

// Si rien ne doit changer mon state => mapDispatchToProps = {}
const mapDispatchToProps = (dispatch) => ({
  // ma_props: (inputValue) => dispatch(mon_action(inputValue)),

  onChangeEmail: (newValue) => {
   const action = onChangeEmail(newValue);
   dispatch(action);
  }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(InputEmail);
