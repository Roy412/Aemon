import React from 'react';

import FormField from '../form-field';
import Label from '../label';
import makeEvent from '../../../lib/make-event';

import './style.scss';

export const PICKER_EMPTY_VALUE = '__EmptyValue';

class Picker extends FormField {
  baseClassName = 'pbg-form-field pbg-picker';

  onChange = ev => {
    if (ev.target.value === PICKER_EMPTY_VALUE) return this.adaptedProps.onChange(makeEvent(null));
    return this.adaptedProps.onChange(ev);
  };

  get value() {
    return this.adaptedProps.value === null ? PICKER_EMPTY_VALUE : this.adaptedProps.value;
  }

  renderLabel() {
    return <Label required={this.adaptedProps.required}>{this.adaptedProps.label}</Label>;
  }

  renderSelect() {
    const { options = [] } = this.adaptedProps;
    return (
      <select onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} value={this.value}>
        {options.map(({ label, value }, i) => (
          <option value={value === null ? PICKER_EMPTY_VALUE : value} key={`option-${i}`}>
            {label}
          </option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-picker-select-container">
          {this.renderLabel()}
          {this.renderSelect()}
          <i className="pbg-picker-arrow" />
        </div>
        {this.hintOrError}
      </div>
    );
  }
}

export { Picker };
