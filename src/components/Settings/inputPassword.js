import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

const InputPassword = ({ password, onChangePass }) => {

  const handleOnChange = (event) => {
    onChangePass(event.target.value);
  };

  return (
  <input type="password" placeholder="Mot de passe" value={password} onChange={handleOnChange} />
  );
}

InputPassword.propTypes = {
  password: PropTypes.string.isRequired,
  onChangePass: PropTypes.func.isRequired,
};
export default InputPassword;
