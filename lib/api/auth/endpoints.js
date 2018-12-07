'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AUTH_BASE_ENDPOINT = undefined;

var _config = require('../../config.base');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _config2.default.default[process.env.REACT_APP_ENV || 'production'];
// console.log("ENV: ", process.env.REACT_APP_ENV);
// console.log("CONFIG: ", baseConfig.default);

/* eslint-disable import/prefer-default-export */
var endpoints = config.endpoints;

var AUTH_BASE_ENDPOINT = exports.AUTH_BASE_ENDPOINT = '' + endpoints.auth;