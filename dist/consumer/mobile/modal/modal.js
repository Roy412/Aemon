"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _heading = require("../heading");

var _button = require("../button");

require("./style.css");

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

var Modal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Modal, _React$PureComponent);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBackClick", function () {
      if (_this.props.onBackClick) return _this.props.onBackClick();
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "pbg-consumer-mobile pbg-modal"
      }, _react.default.createElement("div", {
        className: "pbg-modal-dialog"
      }, _react.default.createElement("div", {
        className: "pbg-modal-heading"
      }, _react.default.createElement(_button.LinkButton, {
        onClick: this.onBackClick
      }, this.props.backButtonCaption), _react.default.createElement(_heading.H2, null, this.props.title)), _react.default.createElement("div", {
        className: "pbg-modal-body"
      }, this.props.children), this.cta), _react.default.createElement("div", {
        className: "pbg-modal-overlay",
        onClick: this.props.onBackClick
      }));
    }
  }, {
    key: "cta",
    get: function get() {
      var _this2 = this;

      if (this.props.cta && this.props.cta.length) {
        return _react.default.createElement("div", {
          className: "pbg-modal-cta"
        }, this.props.cta.map(function (config, index) {
          return renderButton(config, index === _this2.props.cta.length - 1);
        }));
      }
    }
  }]);

  return Modal;
}(_react.default.PureComponent);

;

var renderButton = function renderButton(_ref, isLast) {
  var label = _ref.label,
      onClick = _ref.onClick,
      type = _ref.type,
      disabled = _ref.disabled;
  var ButtonComponent = chooseComponent(type);
  var className = isLast ? 'last' : '';
  var props = {
    key: label,
    className: className,
    onClick: onClick,
    disabled: disabled
  };
  return _react.default.createElement(ButtonComponent, props, label);
};

var chooseComponent = function chooseComponent(type) {
  switch (type) {
    case _button.types.LINK:
      return _button.LinkButton;

    case _button.types.SECONDARY:
      return _button.SecondaryButton;

    case _button.types.PRIMARY:
    default:
      return _button.PrimaryButton;
  }
};

var _default = Modal;
exports.default = _default;