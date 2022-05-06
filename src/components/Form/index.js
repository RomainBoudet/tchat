// import npm
import React from 'react';
import { Send } from 'react-feather';
import PropTypes from 'prop-types';


// import style
import './style.scss';

// import react

const Form = ({input, onChange, onSubmit}) => {

  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      return;
    }
    // la valeur : event.target[0].value
    onSubmit();
  };

  return (
 <form className='form' onSubmit={handleSubmit} >
    <input
    type='text'
    className='form__input'
    placeholder='Saisissez votre message...'
    onChange={handleOnChange}
    value={input}
    />
    <button type='submit' className='form__submit' > <Send size={32} /> </button>

 </form>

  );
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};



export default Form;
