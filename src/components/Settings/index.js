import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import InputEmail from '../../containers/Settings/InputEmail';
import InputPassword from '../../containers/Settings/InputPassword';

import './style.scss'


const Settings = ({ open, openToggle }) => (
  <div className={classNames('settings', {'settings--active' : open})}>
  <button type='button' onClick={openToggle}>+</button>
  <form>
    <InputEmail />
    <InputPassword />
    <button type="submit">Envoyer</button>
  </form>
  </div>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  openToggle: PropTypes.func.isRequired,

};

export default Settings;
