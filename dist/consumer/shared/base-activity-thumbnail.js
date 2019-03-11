"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT_ICON_URL = exports.PURCHASE_COMMENT_CREATED = exports.PURCHASE_COMPLETED = exports.PAYMENT_CAPTURED = exports.PAYMENT_AUTHORIZED_PURCHASE = exports.PAYMENT_AUTHORIZED_PAYMENT = exports.PAYMENT_AUTHORIZED_DEPOSIT = exports.PAYMENT_AUTHORIZED = exports.PURCHASE_UNTIPPED = exports.PURCHASE_TIPPED = exports.MEMBER_WITHDREW = exports.MEMBER_JOINED = exports.MEMBER_INVITED = exports.PURCHASE_CLAIMED = exports.PURCHASE_UPDATED = exports.URL_PREFIX = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _defineProperty2;

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

var URL_PREFIX = 'https://assets.paybygroup.com/images/activity-icons/';
exports.URL_PREFIX = URL_PREFIX;
var PURCHASE_UPDATED = 'purchase_updated';
exports.PURCHASE_UPDATED = PURCHASE_UPDATED;
var PURCHASE_CLAIMED = 'purchase_claimed';
exports.PURCHASE_CLAIMED = PURCHASE_CLAIMED;
var MEMBER_INVITED = 'member_invited';
exports.MEMBER_INVITED = MEMBER_INVITED;
var MEMBER_JOINED = 'member_joined';
exports.MEMBER_JOINED = MEMBER_JOINED;
var MEMBER_WITHDREW = 'member_withdrew';
exports.MEMBER_WITHDREW = MEMBER_WITHDREW;
var PURCHASE_TIPPED = 'purchase_tipped';
exports.PURCHASE_TIPPED = PURCHASE_TIPPED;
var PURCHASE_UNTIPPED = 'purchase_untipped';
exports.PURCHASE_UNTIPPED = PURCHASE_UNTIPPED;
var PAYMENT_AUTHORIZED = 'payment_authorized';
exports.PAYMENT_AUTHORIZED = PAYMENT_AUTHORIZED;
var PAYMENT_AUTHORIZED_DEPOSIT = 'payment_authorized_deposit';
exports.PAYMENT_AUTHORIZED_DEPOSIT = PAYMENT_AUTHORIZED_DEPOSIT;
var PAYMENT_AUTHORIZED_PAYMENT = 'payment_authorized_payment';
exports.PAYMENT_AUTHORIZED_PAYMENT = PAYMENT_AUTHORIZED_PAYMENT;
var PAYMENT_AUTHORIZED_PURCHASE = 'payment_authorized_purchase';
exports.PAYMENT_AUTHORIZED_PURCHASE = PAYMENT_AUTHORIZED_PURCHASE;
var PAYMENT_CAPTURED = 'payment_captured';
exports.PAYMENT_CAPTURED = PAYMENT_CAPTURED;
var PURCHASE_COMPLETED = 'purchase_completed';
exports.PURCHASE_COMPLETED = PURCHASE_COMPLETED;
var PURCHASE_COMMENT_CREATED = 'purchase_comment_created';
exports.PURCHASE_COMMENT_CREATED = PURCHASE_COMMENT_CREATED;
var DEFAULT_ICON_URL = "".concat(URL_PREFIX).concat(MEMBER_WITHDREW);
exports.DEFAULT_ICON_URL = DEFAULT_ICON_URL;
var types = [PURCHASE_UPDATED, PURCHASE_CLAIMED, MEMBER_INVITED, MEMBER_JOINED, MEMBER_WITHDREW, PURCHASE_TIPPED, PURCHASE_UNTIPPED, PAYMENT_AUTHORIZED, PAYMENT_AUTHORIZED_DEPOSIT, PAYMENT_AUTHORIZED_PAYMENT, PAYMENT_AUTHORIZED_PURCHASE, PAYMENT_CAPTURED, PURCHASE_COMPLETED, PURCHASE_COMMENT_CREATED, DEFAULT_ICON_URL];

var ActivityThumbnail =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ActivityThumbnail, _React$PureComponent);

  function ActivityThumbnail() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActivityThumbnail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActivityThumbnail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseClassName", 'pbg-activity-thumbnail');

    return _this;
  }

  _createClass(ActivityThumbnail, [{
    key: "renderAvatar",
    value: function renderAvatar() {
      throw new Error('Not implemented, Implement this method in a sub-class.');
    }
  }, {
    key: "renderAvatarWithElement",
    value: function renderAvatarWithElement(Avatar) {
      return _react.default.createElement("div", {
        className: this.baseClassName
      }, _react.default.createElement(Avatar, this.props));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.shouldRenderAvatar) return this.renderAvatar();
      var url = ActivityThumbnail.icons[this.props.type];
      return _react.default.createElement("div", {
        className: this.baseClassName
      }, _react.default.createElement("img", {
        src: url,
        width: this.props.size,
        height: this.props.size
      }));
    }
  }, {
    key: "shouldRenderAvatar",
    get: function get() {
      var hasUrl = !!ActivityThumbnail.icons[this.props.type];
      return !hasUrl && (!!this.props.src || !!this.props.userId);
    }
  }]);

  return ActivityThumbnail;
}(_react.default.PureComponent);

_defineProperty(ActivityThumbnail, "DEFAULT_SIZE", 35);

_defineProperty(ActivityThumbnail, "propTypes", {
  size: _propTypes.default.number.isRequired,
  userId: _propTypes.default.string,
  src: _propTypes.default.string,
  type: function type(props, propName) {
    if (!(0, _lodash.includes)(types, props[propName])) {
      return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
    }
  }
});

_defineProperty(ActivityThumbnail, "defaultProps", {
  size: ActivityThumbnail.DEFAULT_SIZE,
  type: null,
  userId: null,
  src: null
});

_defineProperty(ActivityThumbnail, "icons", (_defineProperty2 = {}, _defineProperty(_defineProperty2, PURCHASE_UPDATED, "".concat(URL_PREFIX).concat(PURCHASE_UPDATED, ".svg")), _defineProperty(_defineProperty2, PURCHASE_CLAIMED, "".concat(URL_PREFIX).concat(PURCHASE_CLAIMED, ".svg")), _defineProperty(_defineProperty2, MEMBER_INVITED, "".concat(URL_PREFIX).concat(MEMBER_INVITED, ".svg")), _defineProperty(_defineProperty2, MEMBER_JOINED, "".concat(URL_PREFIX).concat(MEMBER_JOINED, ".svg")), _defineProperty(_defineProperty2, MEMBER_WITHDREW, "".concat(URL_PREFIX).concat(MEMBER_WITHDREW, ".svg")), _defineProperty(_defineProperty2, PURCHASE_TIPPED, "".concat(URL_PREFIX).concat(PURCHASE_TIPPED, ".svg")), _defineProperty(_defineProperty2, PURCHASE_UNTIPPED, "".concat(URL_PREFIX).concat(PURCHASE_UNTIPPED, ".svg")), _defineProperty(_defineProperty2, PAYMENT_AUTHORIZED, "".concat(URL_PREFIX).concat(PAYMENT_AUTHORIZED, ".svg")), _defineProperty(_defineProperty2, PAYMENT_AUTHORIZED_DEPOSIT, "".concat(URL_PREFIX).concat(PAYMENT_AUTHORIZED_DEPOSIT, ".svg")), _defineProperty(_defineProperty2, PAYMENT_AUTHORIZED_PAYMENT, "".concat(URL_PREFIX).concat(PAYMENT_AUTHORIZED_PAYMENT, ".svg")), _defineProperty(_defineProperty2, PAYMENT_AUTHORIZED_PURCHASE, "".concat(URL_PREFIX).concat(PAYMENT_AUTHORIZED_PURCHASE, ".svg")), _defineProperty(_defineProperty2, PAYMENT_CAPTURED, "".concat(URL_PREFIX).concat(PAYMENT_CAPTURED, ".svg")), _defineProperty(_defineProperty2, PURCHASE_COMPLETED, "".concat(URL_PREFIX).concat(PURCHASE_COMPLETED, ".svg")), _defineProperty(_defineProperty2, PURCHASE_COMMENT_CREATED, false), _defineProperty2));

var _default = ActivityThumbnail;
exports.default = _default;