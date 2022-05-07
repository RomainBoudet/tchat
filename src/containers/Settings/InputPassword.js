import { connect } from 'react-redux';
import { onChangePass } from 'src/actions';
import InputPassword from '../../components/Settings/inputPassword';

// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state, ownProps) => ({
  password: state.settings.password,

});

// Si rien ne doit changer mon state => mapDispatchToProps = {}
const mapDispatchToProps = (dispatch) => ({
  // ma_props: (inputValue) => dispatch(mon_action(inputValue)),

  onChangePass: (newValue) => {
    const action = onChangePass(newValue);
    dispatch(action);
   }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(InputPassword);
