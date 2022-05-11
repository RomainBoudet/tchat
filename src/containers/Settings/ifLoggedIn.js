import { connect } from 'react-redux';
import ifLoggedIn from 'src/components/Settings/ifLoggedIn';

// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state, ownProps) => ({
 pseudo: state.settings.pseudo,
 enfantDuContainer: ownProps.children,
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ifLoggedIn);
