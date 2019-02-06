"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CLASS_NAME = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CLASS_NAME = 'pbg-button';
exports.CLASS_NAME = CLASS_NAME;

var BaseButton =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(BaseButton, _React$PureComponent);

  function BaseButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseClassName", CLASS_NAME);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (ev) {
      if (_this.props.disabled) return;
      if (typeof _this.props.onClick === 'function') return _this.props.onClick(ev);
    });

    return _this;
  }

  _createClass(BaseButton, [{
    key: "renderHint",
    value: function renderHint(Hint) {
      if (this.props.hint) {
        return _react.default.createElement("div", {
          className: "pbg-button-hint-container"
        }, _react.default.createElement(Hint, null, this.props.hint));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("button", {
        type: this.buttonType,
        className: this.className,
        onClick: this.onClick,
        disabled: this.props.disabled
      }, _react.default.createElement("span", null, this.props.children)), this.hint);
    }
  }, {
    key: "buttonType",
    get: function get() {
      return !!this.props.onClick ? 'button' : 'submit';
    }
  }, {
    key: "className",
    get: function get() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          className = _this$props.className;
      var base = className ? "".concat(this.baseClassName, " ").concat(className) : this.baseClassName;
      return disabled ? base + ' disabled' : base;
    }
  }, {
    key: "hint",
    get: function get() {
      throw new Error('Not implemented, Implement this method in a sub-class');
    }
  }]);

  return BaseButton;
}(_react.default.PureComponent);

var _default = BaseButton;
exports.default = _default;