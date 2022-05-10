// == Import npm
import React, { useEffect } from 'react';
import { wsConnect } from 'src/actions';

// == Import
import './styles.scss';
import Form from '../../containers/Form';
import Messages from '../../containers/Messages';
import Footer from '../Footer';
import Settings from '../../containers/Settings/Settings';
import 'semantic-ui-css/semantic.min.css'

import { useDispatch } from 'react-redux';

// Container ou useDispatch mais je vais devoir déclencher une action, qui sera effectué dans un MW
// Déclenché une seule fois, au ptemier chargement de la page !
// == Composant
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect())
  }, []);

return (
  <div className="app">
    <Messages/>
    <Form />
    <Settings />
    <Footer />
  </div>
);
}
// == Export
export default App;
