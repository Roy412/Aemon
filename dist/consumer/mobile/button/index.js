"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallFacebookButton = exports.FacebookButton = exports.LinkButton = exports.SmallButton = exports.SecondaryButton = exports.PrimaryButton = exports.types = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireWildcard(require("../../shared/button"));

var _hint = _interopRequireDefault(require("../hint"));

require("./style.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaseMobileButton =
/*#__PURE__*/
function (_BaseButton) {
  _inherits(BaseMobileButton, _BaseButton);

  function BaseMobileButton() {
    _classCallCheck(this, BaseMobileButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(BaseMobileButton).apply(this, arguments));
  }

  _createClass(BaseMobileButton, [{
    key: "hint",
    get: function get() {
      return this.renderHint(_hint.default);
    }
  }]);

  return BaseMobileButton;
}(_button.default);

var PrimaryButton =
/*#__PURE__*/
function (_BaseMobileButton) {
  _inherits(PrimaryButton, _BaseMobileButton);

  function PrimaryButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PrimaryButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PrimaryButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseClassName", "".concat(_button.CLASS_NAME, " pbg-consumer-mobile pbg-button-primary"));

    return _this;
  }

  return PrimaryButton;
}(BaseMobileButton);

exports.PrimaryButton = PrimaryButton;

var SecondaryButton =
/*#__PURE__*/
function (_BaseMobileButton2) {
  _inherits(SecondaryButton, _BaseMobileButton2);

  function SecondaryButton() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, SecondaryButton);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(SecondaryButton)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "baseClassName", "".concat(_button.CLASS_NAME, " pbg-consumer-mobile pbg-button-secondary"));

    return _this2;
  }

  return SecondaryButton;
}(BaseMobileButton);

exports.SecondaryButton = SecondaryButton;

var SmallButton =
/*#__PURE__*/
function (_BaseMobileButton3) {
  _inherits(SmallButton, _BaseMobileButton3);

  function SmallButton() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, SmallButton);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(SmallButton)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "baseClassName", "".concat(_button.CLASS_NAME, " pbg-consumer-mobile pbg-button-small"));

    return _this3;
  }

  return SmallButton;
}(BaseMobileButton);

exports.SmallButton = SmallButton;

var LinkButton =
/*#__PURE__*/
function (_BaseMobileButton4) {
  _inherits(LinkButton, _BaseMobileButton4);

  function LinkButton() {
    var _getPrototypeOf5;

    var _this4;

    _classCallCheck(this, LinkButton);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(LinkButton)).call.apply(_getPrototypeOf5, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "baseClassName", "".concat(_button.CLASS_NAME, " pbg-consumer-mobile pbg-button-link"));

    return _this4;
  }

  return LinkButton;
}(BaseMobileButton);

exports.LinkButton = LinkButton;

var FacebookButton =
/*#__PURE__*/
function (_BaseMobileButton5) {
  _inherits(FacebookButton, _BaseMobileButton5);

  function FacebookButton() {
    var _getPrototypeOf6;

    var _this5;

    _classCallCheck(this, FacebookButton);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf6 = _getPrototypeOf(FacebookButton)).call.apply(_getPrototypeOf6, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "baseClassName", "".concat(_button.CLASS_NAME, " pbg-consumer-mobile pbg-button-facebook"));

    return _this5;
  }

  return FacebookButton;
}(BaseMobileButton);

exports.FacebookButton = FacebookButton;

var SmallFacebookButton =
/*#__PURE__*/
function (_BaseMobileButton6) {
  _inherits(SmallFacebookButton, _BaseMobileButton6);

  function SmallFacebookButton() {
    var _getPrototypeOf7;

    var _this6;

    _classCallCheck(this, SmallFacebookButton);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this6 = _possibleConstructorReturn(this, (_getPrototypeOf7 = _getPrototypeOf(SmallFacebookButton)).call.apply(_getPrototypeOf7, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this6)), "baseClassName", "".concat(_button.CLASS_NAME, " pbg-consumer-mobile pbg-button-facebook-small"));

    return _this6;
  }

  return SmallFacebookButton;
}(BaseMobileButton);

exports.SmallFacebookButton = SmallFacebookButton;
var types = {
  PRIMARY: 'primary',
  SECONDARY: 'seconday',
  SMALL: 'small',
  LINK: 'link',
  FACEBOOK: 'facebook',
  FACEBOOK_SMALL: 'facebook-small'
};
exports.types = types;