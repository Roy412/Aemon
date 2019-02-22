"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _makeEvent = _interopRequireDefault(require("../../../lib/make-event"));

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

var SegmentedControl =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SegmentedControl, _React$Component);

  function SegmentedControl() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SegmentedControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SegmentedControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeSegment: _this.activeSegment
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (ev) {
      _this.props.onChange(ev);

      _this.setState({
        activeSegment: ev.target.value
      });
    });

    return _this;
  }

  _createClass(SegmentedControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onChange((0, _makeEvent.default)(this.intialActiveSegment()));
      this.setState({
        activeSegment: this.intialActiveSegment()
      });
    }
  }, {
    key: "intialActiveSegment",
    value: function intialActiveSegment() {
      var index = (0, _lodash.findIndex)(this.props.segments, function (segment) {
        return segment.active;
      });
      return index > -1 ? index : 0;
    }
  }, {
    key: "renderControl",
    value: function renderControl(config, index) {
      var _this2 = this;

      var isActive = this.state.activeSegment === index;
      var className = "pbg-segmented-control-button ".concat(config.type).concat(isActive ? ' active' : '');
      return _react.default.createElement("div", {
        className: className,
        onClick: function onClick() {
          return _this2.onChange((0, _makeEvent.default)(index));
        }
      }, _react.default.createElement("span", null, config.label ? config.label : '[Label Placeholder]'));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "pbg-consumer-mobile pbg-segmented-control"
      }, this.firstControl, this.secondControl);
    }
  }, {
    key: "firstControl",
    get: function get() {
      return this.renderControl((0, _lodash.first)(this.props.segments) || {}, 0);
    }
  }, {
    key: "secondControl",
    get: function get() {
      return this.renderControl((0, _lodash.last)(this.props.segments) || {}, 1);
    }
  }]);

  return SegmentedControl;
}(_react.default.Component);

_defineProperty(SegmentedControl, "propTypes", {
  segments: _propTypes.default.arrayOf(function (propValue, key, componentName, _l, propName) {
    var prop = propValue[key];

    if (!(0, _lodash.isObject)(prop) || prop.label) {
      return new Error("Invalid prop '".concat(propName, "' supplied to ").concat(componentName));
    }
  }),
  onChange: _propTypes.default.func.isRequired
});

_defineProperty(SegmentedControl, "defaultProps", {
  array: [],
  onChange: function onChange() {}
});

_defineProperty(SegmentedControl, "types", {
  list: 'list',
  pulse: 'pulse'
});

;
var _default = SegmentedControl;
exports.default = _default;