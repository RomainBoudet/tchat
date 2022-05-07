// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Form from '../../containers/Form';
import Messages from '../../containers/Messages';
import Footer from '../Footer';
import Settings from '../../components/Settings';

// == Composant
const App = () => (
  <div className="app">
    <Messages/>
    <Form />
    <Settings />
    <Footer />
  </div>
);
// == Export
export default App;
