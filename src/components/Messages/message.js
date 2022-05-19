import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classNames from 'classnames';

const Message = ({ author, message, isOther, color, users }) => {
  
  // si author se trouve dans users alors on est connecté !
  console.log("users => ", users);
  let isConnected = false;
  if (users.includes(author)) {
    isConnected = true;
  }
  return (
  <div className= {classNames ('message',  {'message__other' : isOther })}>
    <div style={{
        color: (isOther && color) ? color : null,
      }} 
      className='message__author'>
          <span className={classNames ('is__connected', {'true' : isConnected })}/>
        { author }
    </div>
    <div className='message__body'>
      { message }
    </div>
  </div>
    );
  };

Message.propTypes = {
author: PropTypes.string.isRequired,
message: PropTypes.string.isRequired,
isOther: PropTypes.bool.isRequired,
color: PropTypes.string.isRequired,
users: PropTypes.array.isRequired,
};

export default Message;
