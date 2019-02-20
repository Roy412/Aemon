import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ActivityThumbnail from '../activity-thumbnail';

import './style.css';

class ActivityCard extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }

  static defaultProps = {
    type: null,
    title: null,
    time: null,
  }

  get time() {
    return moment(this.props.time).format("hh:mm A");
  }

  render() {
    return (
      <div className="activity-card d-flex">
        <ActivityThumbnail type={this.props.type} />

        <div className="activity-card-text">
          <p className="activity-card-title">{this.props.title}</p>
          <p className="activity-card-time">{this.time}</p>
          <div className="activity-card-description">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityCard;