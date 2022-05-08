import React from 'react';
import './style.scss';

import PulseLoader from 'react-spinners/PulseLoader';

// export default () => <div className="spinner" />;

export default () => <div><p>Chargement &ensp; <PulseLoader size={4} /></p> </div>;

//! https://www.davidhu.io/react-spinners/
