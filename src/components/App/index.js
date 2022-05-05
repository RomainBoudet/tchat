// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Form from '../../containers/Form';
import Messages from '../../containers/Messages';
import Footer from '../Footer';

// == Composant
const App = () => (
  <div className="app">
    <Messages/>
    <Form />
    <Footer />
  </div>
);
// == Export
export default App;
