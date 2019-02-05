import React from 'react';
import { hintTypes } from './hint';

class BaseFormField extends React.Component {
  baseClassName = 'pbg-form-field';

  get className() {
    let resultingClassName = this.baseClassName;

    if (this.error) {
      resultingClassName += ' pbg-form-field-error';
    }

    if (this.focused) {
      resultingClassName += ' pbg-form-field-focused';
    }

    return resultingClassName;
  }

  get adaptedProps() {
    if (this.props.adapter) return this.props.adapter(this.props);
    return this.props;
  }

  get error() { return this.adaptedProps.error; }

  get hint() { return this.adaptedProps.hint; }

  get focused() { return this.adaptedProps.focused || !!this.error; }

  get labelType() {
    throw new Error('Not implemented, Implement this method in a sub-class.');
  }

  get label() {
    throw new Error('Not implemented, Implement this method in a sub-class.');
  }

  get hintOrError() {
    throw new Error('Not implemented, Implement this method in a sub-class.');
  }

  renderHintOrError(Hint) {
    if (this.error) return <div><Hint type={hintTypes.ERROR}>{this.error}</Hint></div>;
    if (this.hint) return <div><Hint>{this.hint}</Hint></div>;
    return null;
  }

  onFocus = (ev) => {
    if (this.adaptedProps.onFocus) return this.adaptedProps.onFocus(ev);
  }

  onChange = (value) => {
    if (this.adaptedProps.onChange) return this.adaptedProps.onChange(value);
  }

  onBlur = (value) => {
    if (this.adaptedProps.onBlur) return this.adaptedProps.onBlur(value);
  }

  render() {
    return (
      <div className={this.className}>
      </div>
    )
  }
};

export default BaseFormField;
