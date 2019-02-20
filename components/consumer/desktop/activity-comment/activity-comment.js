import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ActivityThumbnail, { PURCHASE_COMMENT_CREATED } from '../activity-thumbnail';

import './style.css';
class ActivityComment extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    time: PropTypes.object.isRequired,
  }

  static defaultProps = {
    src: null,
    title: null,
    comment: null
  }

  get time() {
    return moment(this.props.time).format("hh:mm A");
  }

  render() {
    return (
      <div className="activity-comment d-flex">
        <ActivityThumbnail
          type={PURCHASE_COMMENT_CREATED}
          src={this.props.src}
          userId={this.props.userId}
        />
        <div className="activity-comment-text">
          <div className="activity-comment-bubbletip"></div>
          <p className="activity-comment-title">{this.props.title}</p>
          <p className="activity-comment-time">{this.time}</p>
          <p className="activity-comment-comment">{this.props.comment}</p>
        </div>
      </div>
    );
  }
}

export default ActivityComment;