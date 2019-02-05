import React from 'react';
import Hint from '../../shared/hint';
import './style.css'

export * from '../../shared/hint';
export default (props) => {
  return (
    <div className="pbg-consumer-desktop">
      <Hint {...props} />
    </div>
  );
}
