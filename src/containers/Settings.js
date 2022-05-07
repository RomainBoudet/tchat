import { connect } from 'react-redux';
import { toggleSettings } from 'src/actions';
import Settings from 'src/components/Settings';

// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state, ownProps) => ({
  open: state.settings.open,
});

// Si rien ne doit changer mon state => mapDispatchToProps = {}
const mapDispatchToProps = (dispatch) => ({
  openToggle: () => { dispatch(toggleSettings()) },

});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

