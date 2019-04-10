"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldNames = exports.NewAddressField = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _formFields = require("../form-fields");

var _label = _interopRequireWildcard(require("../label"));

var _hint = _interopRequireDefault(require("../hint"));

var _formField = _interopRequireDefault(require("../form-field"));

var _makeEvent = _interopRequireDefault(require("../../../lib/make-event"));

require("./style.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STREET_ADDRESS = 'streetAddress';
var CITY = 'city';
var STATE = 'state';
var POSTAL_CODE = 'postalCode';
var COUNTRY = 'country';

var NewAddressField =
/*#__PURE__*/
function (_FormField) {
  _inherits(NewAddressField, _FormField);

  function NewAddressField() {
    var _getPrototypeOf2, _defineProperty2;

    var _this;

    _classCallCheck(this, NewAddressField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NewAddressField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseClassName", 'pbg-form-field pbg-new-address-field');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", (_defineProperty2 = {}, _defineProperty(_defineProperty2, "".concat(STREET_ADDRESS, "Touched"), false), _defineProperty(_defineProperty2, "".concat(CITY, "Touched"), false), _defineProperty(_defineProperty2, "".concat(STATE, "Touched"), false), _defineProperty(_defineProperty2, "".concat(POSTAL_CODE, "Touched"), false), _defineProperty(_defineProperty2, "".concat(COUNTRY, "Touched"), false), _defineProperty2));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (ev, fieldName) {
      _this.setState(_defineProperty({}, "".concat(fieldName, "Touched"), true), function () {
        if (_this.adaptedProps.onBlur) _this.adaptedProps.onBlur(ev);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateValue", function (value) {
      var newValue = _objectSpread({}, _this.currentValue, value);

      _this.onChange((0, _makeEvent.default)(newValue));
    });

    return _this;
  }

  _createClass(NewAddressField, [{
    key: "extractLabel",
    value: function extractLabel(fieldName) {
      return (0, _lodash.get)(this.adaptedProps, "labels.".concat(fieldName), '');
    }
  }, {
    key: "extractError",
    value: function extractError(fieldName) {
      var forceDisplay = (0, _lodash.get)(this.adaptedProps, 'forceErrorDisplay', false);
      var errorMessage = (0, _lodash.get)(this.adaptedProps, "error.".concat(fieldName));
      if (errorMessage && forceDisplay) return errorMessage;
      if (!errorMessage || !this.state["".concat(fieldName, "Touched")]) return;
      return errorMessage;
    }
  }, {
    key: "textFieldFor",
    value: function textFieldFor(fieldName) {
      var _this2 = this;

      return _react.default.createElement(_formFields.TextField, {
        name: fieldName,
        value: this.currentValue[fieldName] || '',
        label: this.extractLabel(fieldName),
        error: this.extractError(fieldName),
        onChange: function onChange(ev) {
          return _this2.updateValue(_defineProperty({}, fieldName, ev.target.value));
        },
        onBlur: function onBlur() {
          return _this2.onBlur((0, _makeEvent.default)(_this2.currentValue), fieldName);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement("div", {
        className: this.className
      }, this.label, this.textFieldFor(STREET_ADDRESS), this.textFieldFor(CITY), this.textFieldFor(STATE), this.textFieldFor(POSTAL_CODE), _react.default.createElement(_formFields.Picker, {
        name: COUNTRY,
        options: this.countryOptions,
        value: this.currentValue[COUNTRY],
        label: this.extractLabel(COUNTRY),
        error: this.extractError(COUNTRY),
        onChange: function onChange(ev) {
          return _this3.updateValue(_defineProperty({}, COUNTRY, ev.target.value));
        },
        onBlur: function onBlur() {
          return _this3.onBlur((0, _makeEvent.default)(_this3.currentValue), COUNTRY);
        }
      }));
    }
  }, {
    key: "className",
    get: function get() {
      return this.baseClassName;
    }
  }, {
    key: "countryOptions",
    get: function get() {
      return this.adaptedProps.countryOptions || [];
    }
  }, {
    key: "currentValue",
    get: function get() {
      return this.adaptedProps.value || {};
    }
  }, {
    key: "label",
    get: function get() {
      if (this.props.label) {
        return _react.default.createElement("div", {
          className: "pbg-new-address-field-label-and-hint"
        }, _react.default.createElement(_label.default, {
          type: _label.labelTypes.STRONG,
          required: this.props.required
        }, this.props.label), this.props.hint ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("br", null), _react.default.createElement(_hint.default, null, this.props.hint)) : null);
      }
    }
  }]);

  return NewAddressField;
}(_formField.default);

exports.NewAddressField = NewAddressField;
var fieldNames = {
  STREET_ADDRESS: STREET_ADDRESS,
  CITY: CITY,
  STATE: STATE,
  POSTAL_CODE: POSTAL_CODE,
  COUNTRY: COUNTRY
};
exports.fieldNames = fieldNames;