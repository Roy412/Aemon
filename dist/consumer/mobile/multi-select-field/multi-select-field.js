"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelectField = void 0;

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _includes = _interopRequireDefault(require("lodash/includes"));

var _formFields = require("../form-fields");

var _formField = _interopRequireDefault(require("../form-field"));

var _makeEvent = _interopRequireDefault(require("../../../lib/make-event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MultiSelectField =
/*#__PURE__*/
function (_FormField) {
  _inherits(MultiSelectField, _FormField);

  function MultiSelectField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MultiSelectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MultiSelectField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseClassName", 'pbg-form-field pbg-multi-select-field');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateValue", function (checked, value) {
      if (checked) return _this.onChange((0, _makeEvent.default)([].concat(_toConsumableArray(_this.value), [value])));

      _this.onChange((0, _makeEvent.default)(_this.value.filter(function (v) {
        return v !== value;
      })));
    });

    return _this;
  }

  _createClass(MultiSelectField, [{
    key: "valueForOption",
    value: function valueForOption(opt) {
      return (0, _includes.default)(this.value, opt.value);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.className
      }, this.label, this.hintOrError, this.checkboxList);
    }
  }, {
    key: "checkboxList",
    get: function get() {
      var _this2 = this;

      return (0, _get2.default)(this.adaptedProps, 'options', []).map(function (opt, index) {
        return _react.default.createElement(_formFields.Checkbox, {
          key: "checkbox_".concat(index),
          label: opt.label,
          value: _this2.valueForOption(opt),
          name: "checkbox_".concat(index),
          onChange: function onChange(_ref) {
            var target = _ref.target;
            return _this2.updateValue(target.value, opt.value);
          }
        });
      });
    }
  }, {
    key: "value",
    get: function get() {
      return (0, _get2.default)(this, 'adaptedProps.value', []);
    }
  }]);

  return MultiSelectField;
}(_formField.default);

exports.MultiSelectField = MultiSelectField;
;