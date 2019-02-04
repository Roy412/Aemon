"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _avatar = _interopRequireDefault(require("./avatar"));

var _banner = _interopRequireDefault(require("./banner"));

var _divider = _interopRequireDefault(require("./divider"));

var _subheader = _interopRequireDefault(require("./subheader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var desktop = {
  Avatar: _avatar.default,
  Banner: _banner.default,
  Divider: _divider.default,
  Subheader: _subheader.default
};
var _default = desktop;
exports.default = _default;