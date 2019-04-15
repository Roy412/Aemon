"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _noAccountWarning = require("./no-account-warning");

Object.keys(_noAccountWarning).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _noAccountWarning[key];
    }
  });
});