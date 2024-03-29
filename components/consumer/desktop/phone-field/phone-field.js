import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import FormField from '../form-field';
import Picker from '../picker';
import TextField from '../text-field';

import './style.scss';

/** @extends React.Component */
class PhoneField extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-phone-field';

  static propTypes = {
    label: PropTypes.string,
    phoneLabel: PropTypes.string,
    value: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    options: PropTypes.array, // eslint-disable-line react/no-unused-prop-types
    orLabel: PropTypes.string,
    addLabel: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    phoneLabel: null,
    value: '',
    options: [],
    orLabel: 'Or',
    addLabel: 'Add New',
  };

  get options() {
    return this.adaptedProps.options;
  }

  get error() {
    const { touched } = this.state;
    const forceDisplay = get(this.adaptedProps, 'forceErrorDisplay', false);
    const message = get(this.adaptedProps, 'error.phone');
    if (message && forceDisplay) return message;
    if (message && touched) return message;
    return null;
  }

  constructor(props) {
    super(props);

    const { value } = this.props;
    this.state = { selectedPicker: value, touched: false };
  }

  onAddNewClick = () => {
    this.onChangePicker({ target: { value: null } });
  };

  onBlur = value => {
    this.setState({ touched: true });
    return this.adaptedProps.onBlur ? this.adaptedProps.onBlur(value) : null;
  };

  onChange = value => {
    const { onChange } = this.adaptedProps;
    if (onChange) {
      onChange(value);
    }
  };

  onChangePicker = event => {
    const selectedPicker = event.target.value;

    if (selectedPicker) {
      this.setState({ selectedPicker });
    } else {
      this.setState({ selectedPicker, touched: false });
    }
    this.onChange({ ...event, target: { value: !selectedPicker ? '' : selectedPicker } });
  };

  renderPickerButton = () => {
    const { selectedPicker } = this.state;

    return (
      <Picker name="phone-picker" value={selectedPicker} onChange={this.onChangePicker} options={this.options} button />
    );
  };

  renderAddNewButton = () => {
    const { selectedPicker } = this.state;

    if (!selectedPicker) {
      return null;
    }

    const { orLabel, addLabel } = this.props;

    return (
      <div className="pbg-phone-field-add-container">
        <p className="pbg-desktop-label-normal">{orLabel}</p>
        <button type="button" className="pbg-consumer-desktop pbg-button" onClick={this.onAddNewClick}>
          <span>{addLabel}</span>
        </button>
      </div>
    );
  };

  renderInput = () => {
    const { phoneLabel } = this.props;
    const { selectedPicker } = this.state;

    if (selectedPicker) {
      return null;
    }

    return (
      <TextField
        name="phone-number"
        value={this.value}
        label={phoneLabel}
        error={this.error}
        onChange={this.onChange}
        onBlur={this.onBlur}
      />
    );
  };

  render() {
    const { label } = this.props;

    return (
      <div className={this.className}>
        {label && <div className="pbg-desktop-label-normal">{label}</div>}
        <div className="pbg-phone-field-button-container">
          {this.renderPickerButton()}
          {this.renderAddNewButton()}
        </div>
        {this.renderInput()}
      </div>
    );
  }
}

export default PhoneField;
