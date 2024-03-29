import React from 'react';
import cx from 'classnames';
import { H2 } from '../heading';
import { LinkButton, PrimaryButton, SecondaryButton, types as buttonTypes } from '../button';

import './style.scss';

const chooseComponent = type => {
  switch (type) {
    case buttonTypes.LINK:
      return LinkButton;
    case buttonTypes.SECONDARY:
      return SecondaryButton;
    case buttonTypes.PRIMARY:
    default:
      return PrimaryButton;
  }
};

const renderButton = ({ label, onClick, type, disabled }, isLast) => {
  const ButtonComponent = chooseComponent(type);
  const className = isLast ? 'last' : '';
  const props = { key: label, className, onClick, disabled };
  return <ButtonComponent {...props}>{label}</ButtonComponent>;
};

class Modal extends React.PureComponent {
  onBackClick = () => {
    const { onBackClick } = this.props;
    return onBackClick ? onBackClick() : null;
  };

  renderCta() {
    const { cta } = this.props;
    if (!cta || !cta.length) return null;
    return (
      <div className="pbg-modal-cta">{cta.map((config, index) => renderButton(config, index === cta.length - 1))}</div>
    );
  }

  render() {
    const { title, children, onBackClick, backButtonCaption, className } = this.props;
    return (
      <div className={cx('pbg-consumer-mobile pbg-modal', className)}>
        <div className="pbg-modal-dialog">
          <div className="pbg-modal-heading">
            <LinkButton onClick={this.onBackClick}>{backButtonCaption}</LinkButton>
            <H2>{title}</H2>
          </div>
          <div className="pbg-modal-body">{children}</div>
          {this.renderCta()}
        </div>
        <div className="pbg-modal-overlay" onClick={onBackClick} />
      </div>
    );
  }
}

export default Modal;
