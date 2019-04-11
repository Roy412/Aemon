"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _first = _interopRequireDefault(require("lodash/first"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _formFields = require("./form-fields");

var _button = require("./button");

var _label = _interopRequireWildcard(require("./label"));

var _hint = _interopRequireDefault(require("./hint"));

var _formField = _interopRequireDefault(require("./form-field"));

var _makeEvent = _interopRequireDefault(require("../../lib/make-event"));

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

var AddOrSelectField =
/*#__PURE__*/
function (_FormField) {
  _inherits(AddOrSelectField, _FormField);

  function AddOrSelectField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddOrSelectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddOrSelectField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateValue", function (value) {
      var newValue = _objectSpread({}, _this.adaptedProps.value, value);

      _this.onChange((0, _makeEvent.default)(newValue));
    });

    return _this;
  }

  _createClass(AddOrSelectField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var selected = (0, _get2.default)(this.adaptedProps, 'value.selected');

      if (selected !== 'new' && (0, _get2.default)(this, 'options.length')) {
        var newValue = _objectSpread({}, this.adaptedProps.value, {
          selected: (0, _isString.default)(selected) ? selected : (0, _get2.default)((0, _first.default)(this.options), 'value')
        });

        this.onChange((0, _makeEvent.default)(newValue));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.className
      }, this.label, this.picker, this.addNewField, this.addNewButton);
    }
  }, {
    key: "className",
    get: function get() {
      return this.baseClassName;
    }
  }, {
    key: "addingNew",
    get: function get() {
      if (!this.options || !this.options.length) return true;
      var selected = (0, _get2.default)(this.adaptedProps, 'value.selected');
      return selected === 'new';
    }
  }, {
    key: "addNewButton",
    get: function get() {
      var _this2 = this;

      if (this.addingNew) return null;
      return _react.default.createElement(_button.SmallButton, {
        onClick: function onClick() {
          return _this2.updateValue({
            selected: 'new'
          });
        }
      }, this.adaptedProps.addNewButtonLabel);
    }
  }, {
    key: "addNewField",
    get: function get() {
      if (!this.addingNew) return null;
      return this.field;
    }
  }, {
    key: "label",
    get: function get() {
      var _this$props = this.props,
          label = _this$props.label,
          hint = _this$props.hint,
          required = _this$props.required;

      if (label) {
        return _react.default.createElement("div", {
          className: "pbg-add-or-select-field-label"
        }, _react.default.createElement(_label.default, {
          type: _label.labelTypes.STRONG,
          required: required
        }, label), hint ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("br", null), _react.default.createElement(_hint.default, null, hint)) : null);
      }
    }
  }, {
    key: "picker",
    get: function get() {
      var _this3 = this;

      if (!this.options || !this.options.length) return null;
      return _react.default.createElement(_formFields.HistoricalPicker, {
        options: this.options,
        onChange: function onChange(ev) {
          return _this3.updateValue({
            selected: ev.target.value
          });
        },
        value: (0, _get2.default)(this.adaptedProps, 'value.selected')
      });
    }
  }]);

  return AddOrSelectField;
}(_formField.default);

;
var _default = AddOrSelectField;
exports.default = _default;