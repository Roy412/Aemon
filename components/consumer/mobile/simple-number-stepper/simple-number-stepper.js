import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Picker from '../picker';

const baseClassName = 'pbg-consumer-mobile pbg-simple-number-stepper';

const SimpleNumberStepper = ({ min, max, ...rest }) => {
  const options = [];
  for (let i = min; i <= max; i += 1) {
    options.push({ label: i, value: i });
  }

  return (
    <div className={baseClassName}>
      <Picker options={options} {...rest} />
    </div>
  );
};

SimpleNumberStepper.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SimpleNumberStepper;
