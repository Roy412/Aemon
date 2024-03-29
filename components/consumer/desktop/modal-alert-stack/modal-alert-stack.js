import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import last from 'lodash/last';
import jQuery from 'jquery';

import ModalAlert from '../modal-alert';

import './style.scss';

class ModalAlertStack extends React.PureComponent {
  stackElementRef = React.createRef();

  static propTypes = {
    alerts: PropTypes.array,
    onHideAlert: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    alerts: [],
    onHideAlert: null,
    className: null,
  };

  componentDidUpdate(prevProps) {
    const { alerts } = this.props;
    if (prevProps.alerts.length < alerts.length) {
      this.reposition(this.onAlertAdded(last(alerts)));
    }
  }

  reposition(callback) {
    const elem = jQuery(this.stackElementRef.current);
    if (elem) {
      elem.animate(
        { top: `-${elem.height()}px` },
        {
          duration: 500,
          complete: callback,
        }
      );
    }
  }

  onAlertAdded = alert => {
    return () => {
      const { onHideAlert } = this.props;
      if (onHideAlert) setTimeout(() => onHideAlert(alert), 8000);
    };
  };

  renderAlert = (alert, index) => {
    return (
      <ModalAlert
        key={`alert-${index}`}
        error={alert.type === 'error'}
        warning={alert.type === 'warning'}
        success={alert.type === 'success'}
        hideAfter="8000"
        {...alert}
      />
    );
  };

  render() {
    const { alerts, className } = this.props;
    return (
      <div className={cx('pbg-consumer-desktop pbg-modal-alert-stack', className)} ref={this.stackElementRef}>
        {alerts.map(this.renderAlert)}
      </div>
    );
  }
}

export default ModalAlertStack;
