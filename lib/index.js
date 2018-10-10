"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.api = exports.reducers = exports.constants = exports.actions = undefined;

var _actions = require("./actions");

var _actions2 = _interopRequireDefault(_actions);

var _constants = require("./constants");

var _constants2 = _interopRequireDefault(_constants);

var _reducers = require("./reducers");

var _reducers2 = _interopRequireDefault(_reducers);

var _mola = require("./api/mola");

var _mola2 = _interopRequireDefault(_mola);

var _config = require("./config.base");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.actions = _actions2.default;
exports.constants = _constants2.default;
exports.reducers = _reducers2.default;
exports.api = _mola2.default;
exports.config = _config2.default;
// const add = (a,b) => {
//   return a + b;
// };