import React from 'react';

import makeEvent from '../../../lib/make-event';
import FormField from '../form-field';
import DatePicker from '../date-picker';
import TimePicker from '../time-picker';
import { generateNewValue, applyDateToValue, applyTimeToValue } from './value-generator';

import './style.scss';

const toDatePickerString = date => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${date.getFullYear()}-${month}-${day}`;
};

const toTimePickerString = date => {
  const split = date.split(':');
  const hours = split[0].length < 2 ? `0${split[0]}` : split[0];
  const mins = split[1].length < 2 ? `0${split[1]}` : split[1];
  return `${hours}:${mins}`;
};

class DatetimePicker extends FormField {
  baseClassName = 'pbg-form-field pbg-datetime-picker';

  get dateValue() {
    if (this.value) return toDatePickerString(this.value);
    return '';
  }

  get timeValue() {
    if (this.value) return toTimePickerString(`${this.value.getHours()}:${this.value.getMinutes()}`);
    return '';
  }

  get timezone() {
    return this.adaptedProps.timezone;
  }

  onChangeDateValue = ev => {
    const { value: currentValue } = this.adaptedProps;
    const newValue = currentValue
      ? applyDateToValue(currentValue, ev.target.value, this.timezone)
      : generateNewValue(ev.target.value, null, this.timezone);

    this.onChange(makeEvent(newValue));
    this.onBlur(makeEvent(newValue));
  };

  onChangeTimeValue = ev => {
    const { value: currentValue } = this.adaptedProps;
    const newValue = currentValue
      ? applyTimeToValue(currentValue, ev.target.value, this.timezone)
      : generateNewValue(null, ev.target.value, this.timezone);

    this.onChange(makeEvent(newValue));
    this.onBlur(makeEvent(newValue));
  };

  renderPickers() {
    const components = [
      <DatePicker value={this.dateValue} onChange={this.onChangeDateValue} />,
      <TimePicker value={this.timeValue} onChange={this.onChangeTimeValue} />,
    ];

    return components.map((comp, key) => (
      <div className="pbg-datetime-picker-container" key={`comp-${key}`}>
        {comp}
      </div>
    ));
  }

  render() {
    return (
      <div className={this.className}>
        {this.label}
        <div className="pbg-datetime-picker-pickers-wrapper">{this.renderPickers()}</div>
        {this.hintOrError}
      </div>
    );
  }
}

export default DatetimePicker;
