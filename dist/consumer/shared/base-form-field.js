"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _hint = require("./hint");

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

var BaseFormField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseFormField, _React$Component);

  function BaseFormField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseFormField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseFormField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseClassName", 'pbg-form-field');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (ev) {
      if (_this.adaptedProps.onFocus) return _this.adaptedProps.onFocus(ev);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value) {
      if (_this.adaptedProps.onChange) return _this.adaptedProps.onChange(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (value) {
      if (_this.adaptedProps.onBlur) return _this.adaptedProps.onBlur(value);
    });

    return _this;
  }

  _createClass(BaseFormField, [{
    key: "renderLabel",
    value: function renderLabel(Label) {
      var label = this.props.label;

      var labelElement = _react.default.createElement("div", null, _react.default.createElement(Label, {
        type: this.labelType,
        required: this.props.required
      }, label));

      return label ? labelElement : null;
    }
  }, {
    key: "renderHintOrError",
    value: function renderHintOrError(Hint) {
      if (this.error) return _react.default.createElement("div", null, _react.default.createElement(Hint, {
        type: _hint.hintTypes.ERROR
      }, this.error));
      if (this.hint) return _react.default.createElement("div", null, _react.default.createElement(Hint, null, this.hint));
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.className
      });
    }
  }, {
    key: "className",
    get: function get() {
      var resultingClassName = this.baseClassName;

      if (this.error) {
        resultingClassName += ' pbg-form-field-error';
      }

      if (this.focused) {
        resultingClassName += ' pbg-form-field-focused';
      }

      return resultingClassName;
    }
  }, {
    key: "adaptedProps",
    get: function get() {
      if (this.props.adapter) return this.props.adapter(this.props);
      return this.props;
    }
  }, {
    key: "error",
    get: function get() {
      return this.adaptedProps.error;
    }
  }, {
    key: "hint",
    get: function get() {
      return this.adaptedProps.hint;
    }
  }, {
    key: "focused",
    get: function get() {
      return this.adaptedProps.focused || !!this.error;
    }
  }, {
    key: "value",
    get: function get() {
      return this.adaptedProps.value;
    }
  }, {
    key: "labelType",
    get: function get() {
      throw new Error('Not implemented, Implement this method in a sub-class.');
    }
  }, {
    key: "label",
    get: function get() {
      throw new Error('Not implemented, Implement this method in a sub-class.');
    }
  }, {
    key: "hintOrError",
    get: function get() {
      throw new Error('Not implemented, Implement this method in a sub-class.');
    }
  }]);

  return BaseFormField;
}(_react.default.Component);

;
var _default = BaseFormField;
exports.default = _default;