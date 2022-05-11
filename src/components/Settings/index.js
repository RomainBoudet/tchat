import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import InputField from '../../containers/Settings/InputField';
import IfLoggedIn from '../../containers/Settings/ifLoggedIn';
import UserProfil from '../../containers/Settings/UserProfil';
import Spinner from '../Spinner'
import SegmentError from './unauthorized';
import { Icon } from 'semantic-ui-react'


import './style.scss'


const Settings = ({ open, openToggle, onLogin, loading, unauthorized, email, password }) => {



  const handleSubmitSettings = (event) => {
  event.preventDefault();
  if (!email || !password) return;
  onLogin();
  };
  // je pourrais aussi faire un ternaire pour la gestion des classes si je ne veux pas utiliser de package ext :
  //   const settingsClass = isOpened ? 'settings' : 'settings settings-closed';
  // et envoyer settingsClass dans className=

   return (

  <div className={classNames('settings', {'settings--active' : open})}>

  <button type='button' onClick={openToggle}>+</button>
  
<IfLoggedIn>
  <UserProfil/>
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

    <button type="submit" disabled={loading}>{loading ? <Spinner/> : 'Envoyer'}</button>

    {unauthorized && <SegmentError /> }

  </form>

</IfLoggedIn>

  </div>
);
   };

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  openToggle: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Settings;
