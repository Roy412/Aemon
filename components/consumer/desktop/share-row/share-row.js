import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Popover from '../popover';
import colorCodes from '../../shared/scss/_styleguide.scss';

import './style.scss';

class ShareRow extends React.Component {
  baseClassName = 'pbg-consumer-desktop pbg-share-row';

  static propTypes = {
    label: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    detailsText: PropTypes.string,
    className: PropTypes.string,
    detailsContent: PropTypes.node,
  };

  static defaultProps = {
    detailsText: null,
    detailsContent: null,
    className: null,
  };

  renderAmount = () => {
    const { amount, detailsText, detailsContent } = this.props;

    return (
      <div className="pbg-share-row-amount-wrapper">
        <div className="pbg-desktop-label-strong">{amount}</div>
        {detailsContent && (
          <Popover
            trigger={props => (
              <div className="pbg-desktop-small-link" onClick={props.onClick}>
                {detailsText}
              </div>
            )}
            content={detailsContent}
          />
        )}
      </div>
    );
  };

  render() {
    const { label, hint, color, className } = this.props;

    const borderStyle = { borderColor: colorCodes[color] };

    return (
      <div className={cx(this.baseClassName, className)} style={borderStyle}>
        <div className="pbg-desktop-label-normal">{label}</div>
        <div className="pbg-desktop-secondary-text pbg-desktop-small-text">{hint}</div>
        {this.renderAmount()}
      </div>
    );
  }
}

export default ShareRow;
