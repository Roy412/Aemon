import React from 'react';
import PropTypes from 'prop-types';

export const CLASS_NAME = 'pbg-button';

class BaseButton extends React.PureComponent {
  baseClassName = CLASS_NAME;

  static propTypes = {
    disabled: PropTypes.bool,
    submitting: PropTypes.bool,
    className: PropTypes.string,
    hint: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    submitting: false,
    className: null,
    hint: null,
    children: null,
    onClick: null,
  };

  state = {
    active: false,
  };

  get buttonType() {
    const { onClick } = this.props;
    return onClick ? 'button' : 'submit';
  }

  get className() {
    const { disabled, className, submitting } = this.props;
    const { active } = this.state;
    const base = className ? `${this.baseClassName} ${className}` : this.baseClassName;
    const disabledClass = disabled ? `${base} disabled` : base;
    const submittingClass = submitting ? `${disabledClass} submitting` : disabledClass;
    const activeClass = active ? `${submittingClass} pbg-button-active` : submittingClass;
    return activeClass;
  }

  get hint() {
    throw new Error('Not implemented, Implement this method in a sub-class');
  }

  // TODO: rename to follow naming conventions
  activate = () => {
    this.setState({ active: true });
  };

  // TODO: rename to follow naming conventions
  deactivate = () => {
    this.setState({ active: false });
  };

  onClick = ev => {
    const { disabled, submitting, onClick } = this.props;
    if (disabled || submitting) return;
    if (typeof onClick === 'function') onClick(ev);
  };

  renderHint(Hint) {
    const { hint } = this.props;
    if (!hint) return null;

    return (
      <div className="pbg-button-hint-container">
        <Hint>{hint}</Hint>
      </div>
    );
  }

  render() {
    const { disabled, submitting, children } = this.props;
    return (
      <div>
        <button
          type={this.buttonType}
          className={this.className}
          onClick={this.onClick}
          onMouseDown={this.activate}
          onMouseOut={this.deactivate}
          onMouseUp={this.deactivate}
          onBlur={this.deactivate}
          disabled={disabled || submitting}
        >
          <span>{children}</span>
        </button>
        {this.hint}
      </div>
    );
  }
}

export default BaseButton;
