"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupActivityCard = exports.UserCommentCard = exports.ActivityCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _hint = _interopRequireDefault(require("../hint"));

var _heading = require("../heading");

var _activityThumbnail = _interopRequireDefault(require("../activity-thumbnail"));

var _avatar = _interopRequireDefault(require("../avatar"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORMAT = 'hh:mm a';

var ActivityCard = function ActivityCard(props) {
  return _react.default.createElement("div", {
    className: className(props)
  }, _react.default.createElement(_hint.default, null, props.date ? (0, _moment.default)(props.date).format(FORMAT) : FORMAT), props.children);
};

exports.ActivityCard = ActivityCard;

var UserCommentCard = function UserCommentCard(props) {
  return _react.default.createElement(ActivityCard, {
    type: ActivityCard.types.white,
    date: props.date,
    className: "pbg-user-comment-card"
  }, _react.default.createElement("div", {
    className: "d-flex"
  }, _react.default.createElement(_avatar.default, {
    src: props.userAvatar,
    userId: props.userId
  }), _react.default.createElement("div", {
    className: "flex-grow-1"
  }, _react.default.createElement(_heading.H3, null, props.userName))), _react.default.createElement("p", null, props.comment));
};

exports.UserCommentCard = UserCommentCard;

var GroupActivityCard = function GroupActivityCard(props) {
  return _react.default.createElement(ActivityCard, {
    date: props.date,
    className: "pbg-group-activity-card"
  }, _react.default.createElement("div", {
    className: "d-flex"
  }, _react.default.createElement(_activityThumbnail.default, {
    type: props.type
  }), _react.default.createElement("div", {
    className: "flex-grow-1"
  }, _react.default.createElement(_heading.H3, null, props.title), _react.default.createElement("div", {
    className: "pbg-group-activity-card-content"
  }, props.children))));
};

exports.GroupActivityCard = GroupActivityCard;

var className = function className(props) {
  var base = 'pbg-consumer-mobile pbg-activity-card';

  if (props.className) {
    base += " ".concat(props.className);
  }

  if (props.type && classNames[props.type]) return "".concat(base, " ").concat(classNames[props.type]);
  return base;
};

ActivityCard.types = {
  white: 'white'
};
var classNames = {
  white: 'pbg-activity-card-white'
};