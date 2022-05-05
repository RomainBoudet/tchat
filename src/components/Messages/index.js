// import npm
import React from 'react';
import Message from './message';
import PropTypes from 'prop-types';
// import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

// import style
import './style.scss';

// import react

const Messages = ({ messages }) => (
<div className='messages'>
  {messages.map((message) => (  
     <Message {...message} key={message.id} />
))}

</div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};


export default Messages;
