"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _activityThumbnail = _interopRequireDefault(require("./activity-thumbnail"));

var _baseActivityThumbnail = require("../../shared/base-activity-thumbnail");

Object.keys(_baseActivityThumbnail).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _baseActivityThumbnail[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _activityThumbnail.default;
exports.default = _default;