import React from 'react';
import { Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import './style.scss'

const UserProfil = ({ pseudo }) => (
  <Segment size='small' className='user-profil'>
    Bonjour { pseudo } 🎉 
  </Segment>
);

UserProfil.propTypes = {
  pseudo: PropTypes.string.isRequired,
};
export default UserProfil;
