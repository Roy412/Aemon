"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _defaults = _interopRequireDefault(require("./defaults"));

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

var Avatar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Avatar, _React$PureComponent);

  function Avatar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Avatar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hasError: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleError", function () {
      _this.setState({
        hasError: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getFallbackImageProps", function () {
      var userId = _this.props.userId;
      var colors = _defaults.default.colors;

      if (!userId) {
        return {
          color: colors[0]
        };
      }

      var index = parseInt(userId, 16);
      return {
        color: colors[index % colors.length]
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getInitials", function () {
      var fullName = _this.props.fullName;
      if (!fullName) return false;
      var nameArray = fullName.split(' ');
      return nameArray.filter(function (word, idx) {
        if (idx === 0 || idx === nameArray.length - 1) {
          return true;
        }

        return false;
      }).map(function (i) {
        return i.substr(0, 1).toUpperCase();
      }).join('');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderInitials", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          size = _this$props.size;

      var _this$getFallbackImag = _this.getFallbackImageProps(),
          color = _this$getFallbackImag.color;

      var initials = _this.getInitials();

      var classNames = (0, _classnames.default)('pbg-avatar', className);

      if (initials.length === 1) {
        classNames = (0, _classnames.default)(classNames, 'single');
      }

      return _react.default.createElement("div", {
        className: classNames,
        style: {
          backgroundColor: color,
          width: "".concat(size, "px"),
          height: "".concat(size, "px")
        }
      }, _react.default.createElement("div", null, initials));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderFallbackAvatar", function () {
      var _this$props2 = _this.props,
          className = _this$props2.className,
          size = _this$props2.size;

      var _this$getFallbackImag2 = _this.getFallbackImageProps(),
          color = _this$getFallbackImag2.color;

      return _react.default.createElement("svg", {
        className: (0, _classnames.default)('pbg-avatar', className),
        width: size,
        height: size,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react.default.createElement("path", {
        fill: color,
        d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
      }), _react.default.createElement("path", {
        d: "M16.1367 6.25714C13.1007 6.25714 10.6367 8.72119 10.6367 11.7572V14.9913C10.6367 18.0274 13.1007 20.4914 16.1367 20.4914C19.1727 20.4914 21.6367 18.0274 21.6367 14.9913V11.7572C21.6367 8.72119 19.1727 6.25714 16.1367 6.25714Z",
        stroke: "white"
      }), _react.default.createElement("path", {
        d: "M24.0677 22.6036C24.7497 22.9886 25.4097 23.4286 26.0367 23.9126C26.7297 24.4516 27.1367 25.2876 27.1367 26.1897V32.1801C27.1367 33.7531 25.9047 34.1149 24.3867 34.1149H7.88672C6.36872 34.1149 5.13672 33.7531 5.13672 32.1801V26.1897C5.13672 25.2876 5.54372 24.4516 6.23672 23.9126C6.86372 23.4286 7.52371 22.9886 8.20571 22.6036",
        stroke: "white"
      }));
    });

    return _this;
  }

  _createClass(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          size = _this$props3.size,
          src = _this$props3.src;
      var hasError = this.state.hasError;
      var initials = this.getInitials();

      if (src && !hasError) {
        return _react.default.createElement("img", {
          className: (0, _classnames.default)('pbg-avatar', className),
          height: size,
          src: src,
          width: size,
          onError: this.handleError
        });
      }

      if (initials.length) {
        return this.renderInitials();
      }

      return this.renderFallbackAvatar();
    }
  }]);

  return Avatar;
}(_react.default.PureComponent);

_defineProperty(Avatar, "DEFAULT_SIZE", 32);

_defineProperty(Avatar, "propTypes", {
  className: _propTypes.default.string,
  size: _propTypes.default.number.isRequired,
  src: _propTypes.default.string,
  fullName: _propTypes.default.string
});

_defineProperty(Avatar, "defaultProps", {
  className: '',
  size: Avatar.DEFAULT_SIZE
});

var _default = Avatar;
exports.default = _default;