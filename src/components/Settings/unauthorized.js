import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { Segment } from 'semantic-ui-react'
import Expire from './Expire';


const SegmentError = () => (
  <Expire delay='8000'><Segment fluid='true' inverted color='red' textAlign='center'size='small' icon='dont' raised>Erreur lors de la connexion</Segment></Expire> 
);

SegmentError.propTypes = {};

export default SegmentError;
