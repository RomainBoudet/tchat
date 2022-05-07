import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

const InputEmail = ({ email, onChangeEmail }) => { 

  const handleOnChange = (event) => {
    onChangeEmail(event.target.value);
  };

  return(
  <input type="email" placeholder="Adresse email" value={email} onChange={handleOnChange} />
);
};

InputEmail.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
};
export default InputEmail;
