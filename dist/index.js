"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consumerMobile = exports.consumerDesktop = void 0;

var _mobile = _interopRequireDefault(require("./consumer/mobile"));

var _desktop = _interopRequireDefault(require("./consumer/desktop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var consumerMobile = _mobile.default;
exports.consumerMobile = consumerMobile;
var consumerDesktop = _desktop.default;
exports.consumerDesktop = consumerDesktop;