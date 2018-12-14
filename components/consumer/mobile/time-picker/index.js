import React from 'react';
import PropTypes from 'prop-types';
import FormField from '../form-field';
import Label, { types as labelTypes } from '../label';
import makeEvent from '../../../lib/make-event';
import './style.scss';

class TimePicker extends FormField {
  static propTypes = {
    formater: PropTypes.func,
  };

  baseClassName = 'pbg-form-field pbg-time-picker';

  get displayValue() {
    const format = this.props.formater || defaultFormater;
    return format(this.props.value);
  }

  render() {
    return (
      <div className={this.className}>
        {this.label}
        <div className="pbg-time-picker-container">
          <div className="pbg-time-picker-mask">
            <Label type={labelTypes.SECONDARY}>{this.displayValue}</Label>
            <span className="pbg-picker-arrow" />
          </div>
          <input
            type="time"
            value={this.props.value || ''}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </div>
        {this.hintOrError}
      </div>
    )
  }
}

const defaultFormater = (time) => {
  if (!time) return 'hh:mm';
  return time;
};

export { TimePicker };