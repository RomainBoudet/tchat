// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Form from '../Form';
import Messages from '../Messages';
import Footer from '../Footer';
import Header from '../Header';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Messages/>
    <Form />
    <Footer />
  </div>
);
// == Export
export default App;
