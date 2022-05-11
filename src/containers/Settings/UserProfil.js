import { connect } from 'react-redux';
 // import { mon_action } from 'src/actions';
import UserProfil from 'src/components/Settings/UserProfil';

// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state, ownProps) => ({
  pseudo: state.settings.pseudo,
});

// Si rien ne doit changer mon state => mapDispatchToProps = {}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfil);
