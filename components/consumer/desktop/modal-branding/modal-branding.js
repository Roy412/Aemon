import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Divider from '../divider';

import './style.scss';

class ModalBranding extends React.PureComponent {
  baseClassName = 'pbg-consumer-desktop pbg-modal-branding';

  static propTypes = {
    logo: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
    className: null,
  };

  renderFooter() {
    const { children } = this.props;
    return (
      <div className="pbg-modal-branding-footer">
        <Divider />
        <div className="pbg-modal-branding-footer-content">{children}</div>
      </div>
    );
  }

  render() {
    const { logo, children, className } = this.props;
    return (
      <div className={cx(this.baseClassName, className)}>
        <div className="pbg-modal-branding-header">
          <div className="pbg-modal-branding-merchant-logo">
            <img src={logo} />
          </div>
          <div className="pbg-modal-branding-powered-by-logo">
            <span>powered by</span>
            <i className="pbg-logo-powered-by" />
          </div>
        </div>
        {children ? this.renderFooter() : ''}
      </div>
    );
  }
}

export default ModalBranding;
