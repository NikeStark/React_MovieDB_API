import React from 'react';

import './error-indicator.css';
import icon from './pngwave.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} className="droid-dog"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (the service is NOT available in this moment)
      </span>
      <span>
        Please, try again later...
      </span>
    </div>
  );
};

export default ErrorIndicator;