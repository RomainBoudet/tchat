// import npm
import React, { useEffect, useRef } from 'react';
import { Send } from 'react-feather';
import PropTypes from 'prop-types';


// import style
import './style.scss';

// import react

const Form = ({ input, onChange, onSubmit, pseudo }) => {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();}, []);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      return;
    }
    // la valeur : event.target[0].value
    onSubmit();
  };

  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  let placeHolder;
  if(pseudo !== '') {
    placeHolder = `Bonjour ${pseudo}, Saisissez votre message...`;
  } else {
    placeHolder = 'Saisissez votre message...'
  }


  return (
 <form className='form' onSubmit={handleSubmit} >
    <input
    ref={inputRef}
    type='text'
    className='form__input'
    placeholder={placeHolder}
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
