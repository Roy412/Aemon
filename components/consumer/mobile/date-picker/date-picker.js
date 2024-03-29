import React from 'react';
import PropTypes from 'prop-types';
import FormField from '../form-field';
import Label, { labelTypes } from '../label';
import './style.scss';

const formatDate = date => {
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${month}/${day}/${date.getFullYear()}`;
};

const formatDateString = date => {
  const split = date.split('-');
  const month = split[1].length < 2 ? `0${split[1]}` : split[1];
  const day = split[2].length < 2 ? `0${split[2]}` : split[2];
  return `${month}/${day}/${split[0]}`;
};

const defaultFormater = date => {
  if (!date) return 'mm/dd/yyyy';
  return date.constructor.name === 'Date' ? formatDate(date) : formatDateString(date);
};

class DatePicker extends FormField {
  static propTypes = {
    formater: PropTypes.func,
  };

  baseClassName = 'pbg-form-field pbg-date-picker';

  get defaultFormater() {
    return defaultFormater;
  }

  get displayValue() {
    const format = this.adaptedProps.formater || this.defaultFormater;
    return format(this.adaptedProps.value);
  }

  renderMaskContents() {
    return (
      <React.Fragment>
        <Label type={labelTypes.SECONDARY}>{this.displayValue}</Label>
        <span className="pbg-picker-arrow" />
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className={this.className}>
        {this.renderLabel()}
        <div className="pbg-date-picker-container">
          <div className="pbg-date-picker-mask">{this.renderMaskContents()}</div>
          <input type="date" value={this.adaptedProps.value} onChange={this.onChange} onBlur={this.onBlur} />
        </div>
        {this.renderHintOrError()}
      </div>
    );
  }
}

export default DatePicker;
