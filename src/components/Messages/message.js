import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

const message = () => (
  <div className='message'>
    <div className='message_author'>
      Super chat
    </div>
    <div className='message_body'>
      Alors, ça roule ?
    </div>
  </div>
);

message.propTypes = {};

export default message;
