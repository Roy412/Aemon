"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.hintTypes = exports.hintClassNames = void 0;

var _react = _interopRequireDefault(require("react"));

var _trim = _interopRequireDefault(require("lodash/trim"));

var _hintClassNames;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ERROR = 'error';
var CLICKABLE = 'clickable';
var hintClassNames = (_hintClassNames = {
  base: 'pbg-hint'
}, _defineProperty(_hintClassNames, ERROR, 'pbg-hint-error'), _defineProperty(_hintClassNames, CLICKABLE, 'pbg-hint-clickable'), _hintClassNames);
exports.hintClassNames = hintClassNames;
var hintTypes = {
  ERROR: ERROR,
  CLICKABLE: CLICKABLE
};
exports.hintTypes = hintTypes;

var _default = function _default(props) {
  if (props.onClick) {
    return mainTag(props, _react.default.createElement("a", {
      onClick: props.onClick
    }, props.children));
  }

  return mainTag(props, props.children);
};

exports.default = _default;

var mainTag = function mainTag(props, content) {
  if (props.multiline) {
    return _react.default.createElement("p", {
      className: className(props)
    }, content);
  }

  return _react.default.createElement("span", {
    className: className(props)
  }, content);
};

var className = function className(_ref) {
  var type = _ref.type,
      className = _ref.className;
  var resultingClassName = hintClassNames.base;

  if (className) {
    resultingClassName += " ".concat((0, _trim.default)(className));
  }

  if (hintClassNames[type]) {
    resultingClassName += " ".concat(hintClassNames[type]);
  }

  return resultingClassName;
};