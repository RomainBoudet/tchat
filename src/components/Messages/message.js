import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classNames from 'classnames';

const Message = ({ author, message, isOther, color }) => (
  <div className= {classNames ('message',  {'message__other' : isOther })}>
    <div style={{
        color: (isOther && color) ? color : null,
      }} 
      className='message__author'>
      { author }
    </div>
    <div className='message__body'>
      { message }
    </div>
  </div>
);

Message.propTypes = {
author: PropTypes.string.isRequired,
message: PropTypes.string.isRequired,
isOther: PropTypes.bool.isRequired,
color: PropTypes.string.isRequired,
};

export default Message;
