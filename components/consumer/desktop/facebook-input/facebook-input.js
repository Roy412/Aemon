import React  from 'react';

import {FacebookButton} from "../button";
import './style.scss';

const FacebookInput = (props) => {
  const baseClassName = 'pbg-consumer-desktop pbg-facebook-input';
  return (
    <div className={baseClassName}>
      <FacebookButton {...props}>
        Continue with Facebook
      </FacebookButton>
      <p
        className="pbg-desktop-secondary-text pbg-desktop-small-text"
      >
        You previously logged in with Facebook. Please click to authenticate again.
      </p>
    </div>
  )
};

export default FacebookInput;
