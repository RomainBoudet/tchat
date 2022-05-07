import { connect } from 'react-redux';
import { onChangeField } from 'src/actions';
import InputField from '../../components/Settings/inputField';

// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state, ownProps) => ({
  inputField: state.settings[ownProps.inputname],
});

// Si rien ne doit changer mon state => mapDispatchToProps = {}
const mapDispatchToProps = (dispatch, ownProps) => ({
  // ma_props: (inputValue) => dispatch(mon_action(inputValue)),

  onChangeField: (newValue) => {
   const action = onChangeField(ownProps.inputname, newValue);
   dispatch(action);
  }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
