"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneField = void 0;

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _formFields = require("../form-fields");

var _addOrSelectField = _interopRequireDefault(require("../add-or-select-field"));

var _makeEvent = _interopRequireDefault(require("../../../lib/make-event"));

var _touchField = _interopRequireDefault(require("../../../lib/touch-field"));

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

var PhoneField =
/*#__PURE__*/
function (_AddOrSelectField) {
  _inherits(PhoneField, _AddOrSelectField);

  function PhoneField(props) {
    var _this;

    _classCallCheck(this, PhoneField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PhoneField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseClassName", 'pbg-form-field pbg-phone-field');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      phoneTouched: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "touchPhone", function () {
      var newState = {
        phoneTouched: true
      };
      return _this.touchField(newState);
    });

    _this.touchField = _touchField.default.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(PhoneField, [{
    key: "options",
    get: function get() {
      return this.adaptedProps.phoneOptions;
    }
  }, {
    key: "phoneError",
    get: function get() {
      return this.state.phoneTouched ? (0, _get2.default)(this.adaptedProps, 'error.phone') : null;
    }
  }, {
    key: "field",
    get: function get() {
      var _this2 = this;

      return _react.default.createElement(_formFields.TextField, {
        label: this.adaptedProps.addPhoneLabel,
        onChange: function onChange(ev) {
          return _this2.updateValue({
            phone: ev.target.value
          });
        },
        onBlur: this.touchPhone,
        error: this.phoneError
      });
    }
  }]);

  return PhoneField;
}(_addOrSelectField.default);

exports.PhoneField = PhoneField;