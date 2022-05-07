import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

// inputFiel et onChangeField proviennent de mon container
// restProps vient de l'appel de mon container dans le composant parent a InputField
const InputField = ({ inputField, onChangeField, ...restProps }) => { 

  // je récupére inputName pour savoir quel champs est modifié !
  const handleOnChange = (event) => {
    onChangeField( event.target.value);
  };

  return(
  <input {...restProps} value={inputField} onChange={handleOnChange} />
);
};

InputField.propTypes = {
  inputField: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
};
export default InputField;
