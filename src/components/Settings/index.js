import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classNames from 'classnames';

const Settings = ({ open, openToggle }) => (
  <div className={classNames('settings', {'settings--active' : open})}>
  <button type='button' onClick={openToggle}>+</button>
  <form>
    <input type="email" placeholder="Adresse email" />
    <input type="password" placeholder="Mot de passe" />
    <button type="submit">Envoyer</button>
  </form>
  </div>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  openToggle: PropTypes.func.isRequired,

};

export default Settings;
