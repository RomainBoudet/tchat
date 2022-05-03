// import npm
import React from 'react';
import { Send } from 'react-feather';


// import style
import './style.scss';

// import react

const Form = () => (
 <form className='form'>
    <input
    type='text'
    className='form_input'
    placeholder='Saisissez votre message...'
    />
    <button type='submit' className='form_submit'> <Send size={32} /> </button>

 </form>

);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */



export default Form;
