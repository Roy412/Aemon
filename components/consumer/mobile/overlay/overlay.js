import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';
import BackLink from '../back-link';

class Overlay extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    opened: PropTypes.bool,
    backText: PropTypes.string,
    className: PropTypes.string,
    onBackButtonClick: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    title: '',
    backText: '',
    opened: false,
    children: null,
    className: null,
  };

  render() {
    const { title, opened, backText, onBackButtonClick, children, className } = this.props;
    if (!onBackButtonClick) return null;
    return (
      <div
        className={classnames('pbg-consumer-mobile pbg-desktop-shadow-level-two pbg-overlay', className, {
          open: opened,
        })}
      >
        <div className="pbg-overlay-inner">
          <div className="pbg-overlay-inner--header">
            <BackLink label={backText} onClick={onBackButtonClick} />
          </div>
          <div className="pbg-mobile-heading-1">{title}</div>

          <div className="pbg-overlay-content">{children}</div>

          <div className="pbg-overlay-inner--footer">
            <BackLink label={backText} onClick={onBackButtonClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;
