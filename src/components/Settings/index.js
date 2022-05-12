import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import InputField from '../../containers/Settings/InputField';
import IfLoggedIn from '../../containers/Settings/ifLoggedIn';
import UserProfil from '../../containers/Settings/UserProfil';
import Spinner from '../Spinner'
import SegmentError from './unauthorized';
import { Icon, Popup } from 'semantic-ui-react'


import './style.scss'


const Settings = ({ open, openToggle, onLogin, loading, unauthorized, email, password, signOut }) => {



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

  <div className='container-buttons'>
    
    <Popup
      trigger={<button type='button' onClick={openToggle}>+</button>}
      content='Ouverture du formulaire de connexion'
      inverted
      offset={[0, 5]}
      position='left center'
    />
    <Popup
      trigger={<Icon className='sign-out' name='sign-out' onClick={signOut} />}
      content='Déconnexon'
      inverted
      offset={[0, 5]}
      position='left center'
    />
</div>

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
  signOut: PropTypes.func.isRequired,
};

export default Settings;
