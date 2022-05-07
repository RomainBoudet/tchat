import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import Form from '../../containers/Form';

const Settings = () => (
  <div className='settings'>
  <button type='button'>+</button>
  <form>
    <input type="email" placeholder="Adresse email" />
    <input type="password" placeholder="Mot de passe" />
    <button type="submit">Envoyer</button>
  </form>
  </div>
);

Settings.propTypes = {};
export default Settings;
