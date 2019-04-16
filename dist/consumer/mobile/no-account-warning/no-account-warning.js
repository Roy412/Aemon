"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NoAccountWarning = void 0;

var _react = _interopRequireDefault(require("react"));

var _heading = require("../heading");

var _button = require("../button");

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoAccountWarning = function NoAccountWarning(props) {
  return _react.default.createElement("div", {
    className: className(props)
  }, _react.default.createElement("div", {
    className: "d-flex"
  }, _react.default.createElement("img", {
    src: "https://assets.paybygroup.com/images/icons/warning.svg"
  }), _react.default.createElement("div", {
    className: "flex-grow-1"
  }, _react.default.createElement(_heading.H3, null, props.title))), _react.default.createElement("p", null, props.text), _react.default.createElement("div", null, _react.default.createElement(_button.SmallButton, {
    onClick: props.onClick
  }, props.ctaText)));
};

exports.NoAccountWarning = NoAccountWarning;

var className = function className(props) {
  var base = 'pbg-consumer-mobile pbg-no-account-warning';

  if (props.className) {
    base += " ".concat(props.className);
  }

  if (props.type && classNames[props.type]) return "".concat(base, " ").concat(classNames[props.type]);
  return base;
};

var _default = NoAccountWarning;
exports.default = _default;