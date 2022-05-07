import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import InputField from '../../containers/Settings/InputField';

import './style.scss'


const Settings = ({ open, openToggle, onLogin, loading }) => {

  const handleSubmitSettings = (event) => {
  event.preventDefault();
  onLogin();
  };

   return (
  <div className={classNames('settings', {'settings--active' : open})}>
  <button type='button' onClick={openToggle}>+</button>
  <form onSubmit={handleSubmitSettings}>
    <InputField
    inputname="email" // j'envoie inputName pour savoir quel champs sera modifié
    type="email" 
    placeholder="Adresse email"
    icon="user"
    />
    <InputField
    inputname="password"
    type="password" 
    placeholder="Mot de passe" 
    icon="key"
    />

    <button type="submit" disabled={loading}>Envoyer</button>
  </form>
  </div>
);
   };

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  openToggle: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,

};

export default Settings;
