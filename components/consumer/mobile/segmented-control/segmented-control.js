import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isObject, findIndex, first, last } from 'lodash';
import makeEvent from '../../../lib/make-event';

import './style.scss';

class SegmentedControl extends React.Component {
  static propTypes = {
    segments: PropTypes.arrayOf((propValue, key, componentName, _l, propName) => {
      const prop = propValue[key];
      if (!isObject(prop) || prop.label) {
        return new Error(`Invalid prop '${propName}' supplied to ${componentName}`);
      }
    }),
    onChange: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    segments: [],
    onChange: () => {},
    className: null,
  };

  static types = {
    list: 'list',
    pulse: 'pulse',
  };

  state = {
    activeSegment: this.activeSegment,
  };

  componentDidMount() {
    this.onChange(makeEvent(this.initialActiveSegment()));
    this.setState({ activeSegment: this.initialActiveSegment() });
  }

  initialActiveSegment() {
    const { segments } = this.props;
    const index = findIndex(segments, segment => segment.active);
    return index > -1 ? index : 0;
  }

  onChange = ev => {
    const { onChange } = this.props;
    onChange(ev);
    this.setState({ activeSegment: ev.target.value });
  };

  renderFirstControl() {
    const { segments } = this.props;
    return this.renderControl(first(segments) || {}, 0);
  }

  renderSecondControl() {
    const { segments } = this.props;
    return this.renderControl(last(segments) || {}, 1);
  }

  renderControl(config, index) {
    const { activeSegment } = this.state;
    const isActive = activeSegment === index;
    const className = `pbg-segmented-control-button ${config.type}${isActive ? ' active' : ''}`;
    return (
      <div className={className} onClick={() => this.onChange(makeEvent(index))}>
        <span>{config.label ? config.label : '[Label Placeholder]'}</span>
      </div>
    );
  }

  render() {
    const { className } = this.props;
    return (
      <div className={cx('pbg-consumer-mobile pbg-segmented-control', className)}>
        {this.renderFirstControl()}
        {this.renderSecondControl()}
      </div>
    );
  }
}

export default SegmentedControl;
