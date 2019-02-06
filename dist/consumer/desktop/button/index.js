"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PrimaryButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("./button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PrimaryButton = function PrimaryButton(props) {
  return _react.default.createElement(_button.default, _extends({}, props, {
    className: "pbg-consumer-desktop pbg-button-primary"
  }), props.children);
};

exports.PrimaryButton = PrimaryButton;
var _default = _button.default;
exports.default = _default;