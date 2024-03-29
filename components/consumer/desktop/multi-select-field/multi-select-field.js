import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import includes from 'lodash/includes';

import Checkbox from '../checkbox';
import FormField from '../form-field';
import makeEvent from '../../../lib/make-event';

import './style.scss';

/** @extends React.Component */
class MultiSelectField extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-multi-select-field';

  static propTypes = {
    label: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    hint: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    value: PropTypes.array, // eslint-disable-line react/no-unused-prop-types
    options: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
    onChange: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    className: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  };

  static defaultProps = {
    label: null,
    hint: null,
    className: null,
    value: [],
    onChange: () => {},
  };

  get value() {
    return get(this, 'adaptedProps.value', []);
  }

  valueForOption(opt) {
    return includes(this.value, opt.value);
  }

  updateValue = (checked, value) => {
    if (checked) return this.onChange(makeEvent([...this.value, value]));
    return this.onChange(makeEvent(this.value.filter(v => v !== value)));
  };

  renderCheckboxList() {
    return get(this.adaptedProps, 'options', []).map((opt, index) => {
      return (
        <Checkbox
          key={`checkbox_${opt.value}`}
          label={opt.label}
          value={this.valueForOption(opt)}
          name={`checkbox_${index}`}
          onChange={({ target }) => this.updateValue(target.value, opt.value)}
        />
      );
    });
  }

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-multi-select-field-label-wrapper">{this.renderLabel()}</div>
        <div className="pbg-multi-select-field-hint-wrapper">{this.renderHintOrError()}</div>
        {this.renderCheckboxList()}
      </div>
    );
  }
}

export default MultiSelectField;
