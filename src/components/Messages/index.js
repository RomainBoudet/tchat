// import npm
import React from 'react';
import Message from './message';
//import PropTypes from 'prop-types';
// import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

// import style
import './style.scss';

// import react

const Messages = () => (
<div className='messages'>
  <Message/>
  <Message/>
  <Message/>
  <Message/>
  <Message/>
</div>
);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */


export default Messages;
