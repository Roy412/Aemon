"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _heading = require("../heading");

var _hint = _interopRequireDefault(require("../hint"));

var _label = _interopRequireWildcard(require("../label"));

var _button = require("../button");

var _historicalPicker = require("../historical-picker");

require("./style.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TYPE_ERROR = 'error';

var ContributorCard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ContributorCard, _React$PureComponent);

  function ContributorCard() {
    _classCallCheck(this, ContributorCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContributorCard).apply(this, arguments));
  }

  _createClass(ContributorCard, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.className
      }, this.props.heading && _react.default.createElement("div", {
        className: "pbg-contributor-card-heading"
      }, this.props.heading), _react.default.createElement("div", {
        className: "pbg-contributor-card-body"
      }, _react.default.createElement(_heading.H2, null, this.props.title), _react.default.createElement("div", {
        className: "pbg-contributor-card-content"
      }, this.props.content)), _react.default.createElement("div", {
        className: "pbg-contributor-card-ctas"
      }, _react.default.createElement("div", null, this.cta)));
    }
  }, {
    key: "className",
    get: function get() {
      return "pbg-consumer-mobile pbg-contributor-card ".concat(this.typeClassName);
    }
  }, {
    key: "typeClassName",
    get: function get() {
      switch (this.props.type) {
        case TYPE_ERROR:
          return 'pbg-contributor-card-type-error';

        default:
          return 'pbg-contributor-card-type-notice';
      }
    }
  }, {
    key: "cta",
    get: function get() {
      var _this = this;

      return this.props.cta.map(function (cta, index) {
        return _react.default.createElement("div", {
          className: _this.props.cta.length > 1 ? 'cta-container' : '',
          key: "cta-".concat(index)
        }, cta.type === 'picker' ? _react.default.createElement(_historicalPicker.HistoricalPicker, {
          options: cta.options,
          onChange: cta.onChange
        }) : _react.default.createElement(_button.LinkButton, {
          onClick: cta.onClick
        }, cta.label));
      });
    }
  }]);

  return ContributorCard;
}(_react.default.PureComponent);

_defineProperty(ContributorCard, "types", {
  error: TYPE_ERROR
});

_defineProperty(ContributorCard, "propTypes", {
  type: _propTypes.default.string,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  cta: _propTypes.default.array
});

_defineProperty(ContributorCard, "defaultProps", {
  type: null,
  title: null,
  content: null,
  cta: []
});

;
var _default = ContributorCard;
exports.default = _default;