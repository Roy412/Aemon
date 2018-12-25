import React from 'react';
import get from 'lodash/get';
import { HistoricalPicker } from './form-fields';
import { SmallButton } from './button';
import FormField from './form-field';
import makeEvent from '../../lib/make-event';
import touchField from '../../lib/touch-field';

class AddOrSelectField extends FormField {
  get className() {return this.baseClassName; }

  get addingNew() {
    const selected = get(this.props, 'value.selected');
    return selected === 'new';
  }

  get addNewButton() {
    if (this.addingNew) return null;
    return (
      <SmallButton onClick={() => this.updateValue({ selected: 'new' })}>
        {this.props.addNewButtonLabel}
      </SmallButton>
    );
  }

  get addNewField() {
    if (!this.addingNew) return null;
    return this.field;
  }

  get picker() {
    return (
      <HistoricalPicker
        options={this.options}
        onChange={ev => this.updateValue({selected: ev.target.value })}
        value={get(this.props, 'value.selected')}
      />
    );
  }

  updateValue = (value) => {
    const newValue = {
      ...this.props.value,
      ...value,
    };
    this.onChange(makeEvent(newValue));
  }

  render() {
    return (
      <div className={this.className}>
        { this.picker }
        { this.addNewField }
        { this.addNewButton }
      </div>
    )
  }
};

export default AddOrSelectField;
