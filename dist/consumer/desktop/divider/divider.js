"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var className = _ref.className;
  var baseClassName = 'pbg-consumer-desktop pbg-divider';
  return _react.default.createElement("div", {
    className: className ? "".concat(baseClassName, " ").concat(className) : baseClassName
  });
};

exports.default = _default;