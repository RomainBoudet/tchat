import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import InputField from '../../containers/Settings/InputField';

import './style.scss'


const Settings = ({ open, openToggle }) => (
  <div className={classNames('settings', {'settings--active' : open})}>
  <button type='button' onClick={openToggle}>+</button>
  <form>
    <InputField
    inputname="email" // j'envoie inputName pour savoir quel champs sera modifié
    type="email" 
    placeholder="Adresse email" 
    />
    <InputField
    inputname="password"
    type="password" 
    placeholder="Mot de passe" 
    />

    <button type="submit">Envoyer</button>
  </form>
  </div>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  openToggle: PropTypes.func.isRequired,

};

export default Settings;
