import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classNames from 'classnames';

const Message = ({ author, message, isOther }) => (
  <div className= {classNames ('message',  {'message_other' : isOther })}>
    <div className='message_author'>
      { author }
    </div>
    <div className='message_body'>
      { message }
    </div>
  </div>
);

Message.propTypes = {
author: PropTypes.string.isRequired,
message: PropTypes.string.isRequired,
isOther: PropTypes.bool.isRequired,
};

export default Message;
