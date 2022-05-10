// import npm
import React, { useRef, useEffect } from 'react';
import Message from '../../containers/Message';
import PropTypes from 'prop-types';
// import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

// import style
import './style.scss';

// import react

const Messages = ({ messages }) => { 
  
  const messageContainer = useRef(null);
  useEffect(() => {
    messageContainer.current.scrollTo(0, messageContainer.current.scrollHeight);
  }, [messages])

  return(
<div className='messages' ref={messageContainer}>
  {messages.map((message) => {
    return (  
     <Message {...message} key={message.id} />
)})}

</div>
)};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};


export default Messages;
