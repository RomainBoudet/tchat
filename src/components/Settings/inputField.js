import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'


// inputFiel, loading, et onChangeField proviennent de mon container
// restProps vient de l'appel de mon container dans le composant parent a InputField
const InputField = ({ loading, inputField, onChangeField, ...restProps }) => { 

  // je récupére inputName pour savoir quel champs est modifié !
  const handleOnChange = (event) => {
    onChangeField( event.target.value);
  };

  return(
  <Input 
  {...restProps}
  value={inputField}
  onChange={handleOnChange}
  iconPosition="left"
  loading={loading}
  disabled={loading}
  className="input-settings"
  />
);
};

InputField.propTypes = {
  inputField: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
};
export default InputField;
