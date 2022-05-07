import { connect } from 'react-redux';
import Message from 'src/components/Messages/message';

// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state, ownProps) => ({
  isOther: state.settings.pseudo !== ownProps.author, // si true ou false alors classNames saura quoi afficher
});

// Si rien ne doit changer mon state: const mapDispatchToProps = {}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
