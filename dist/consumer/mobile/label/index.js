"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.types = exports.classes = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

var _classes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ACTIVE = 'active';
var CLICKABLE = 'clickable';
var ERROR = 'error';
var INPUT = 'input';
var SECONDARY = 'secondary';
var STRONG = 'strong';
var BASE_CLASS = 'pbg-label';
var ACTIVE_CLASS = 'pbg-label-active';
var CLICKABLE_CLASS = 'pbg-label-clickable';
var ERROR_CLASS = 'pbg-label-error';
var INPUT_CLASS = 'pbg-label-input';
var SECONDARY_CLASS = 'pbg-label-secondary';
var STRONG_CLASS = 'pbg-label-strong';
var classes = (_classes = {
  base: BASE_CLASS
}, _defineProperty(_classes, ACTIVE, ACTIVE_CLASS), _defineProperty(_classes, CLICKABLE, CLICKABLE_CLASS), _defineProperty(_classes, ERROR, ERROR_CLASS), _defineProperty(_classes, INPUT, INPUT_CLASS), _defineProperty(_classes, SECONDARY, SECONDARY_CLASS), _defineProperty(_classes, STRONG, STRONG_CLASS), _classes);
exports.classes = classes;

var Label = function Label(props) {
  if (isClickable(props)) return clickableLabel(props);
  return normalLabel(props);
};

var isClickable = function isClickable(_ref) {
  var type = _ref.type,
      onClick = _ref.onClick;
  return type === CLICKABLE || type === ACTIVE && !!onClick;
};

var clickableLabel = function clickableLabel(props) {
  return _react.default.createElement("label", {
    className: className(props)
  }, _react.default.createElement("a", {
    href: props.href,
    onClick: props.onClick
  }, props.children));
};

var normalLabel = function normalLabel(props) {
  return _react.default.createElement("label", {
    className: className(props)
  }, _react.default.createElement("span", null, props.children));
};

var className = function className(_ref2) {
  var type = _ref2.type,
      required = _ref2.required;
  var resultingClassName = BASE_CLASS;

  if (required) {
    resultingClassName += ' required';
  }

  if (classes[type]) {
    resultingClassName += " ".concat(classes[type]);
  }

  return resultingClassName;
};

var types = {
  ACTIVE: ACTIVE,
  CLICKABLE: CLICKABLE,
  ERROR: ERROR,
  INPUT: INPUT,
  SECONDARY: SECONDARY,
  STRONG: STRONG
};
exports.types = types;
var _default = Label;
exports.default = _default;