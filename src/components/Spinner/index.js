import React from 'react';
import './style.scss';

import ClipLoader from 'react-spinners/ClipLoader';

// export default () => <div className="spinner" />;

export default () => <div><ClipLoader /> <p>Chargement en cours...</p> </div>;

//! https://www.davidhu.io/react-spinners/
