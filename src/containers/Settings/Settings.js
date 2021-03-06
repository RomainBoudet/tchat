import { connect } from 'react-redux';
import { toggleSettings, fetchLogin, signOut, removePseudo } from 'src/actions';
import Settings from '../../components/Settings/index';

// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state, ownProps) => ({
  open: state.settings.open,
  loading: state.settings.loading,
  unauthorized: state.settings.unauthorized,
  email: state.settings.email,
  password: state.settings.password,
});

// Si rien ne doit changer mon state => mapDispatchToProps = {}
const mapDispatchToProps = (dispatch) => ({
  openToggle: () => { dispatch(toggleSettings()) },
  onLogin: () => { dispatch(fetchLogin()) },
  signOut: () => { dispatch (signOut()).then(() => {
    dispatch(removePseudo())
  }) },

});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

