"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _makeEvent = _interopRequireDefault(require("./make-event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(newState) {
  var _this = this;

  this.setState(newState, function () {
    _this.onBlur((0, _makeEvent.default)(_this.props.value));

    _this.forceUpdate();
  });
}

;