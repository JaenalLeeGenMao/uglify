'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/prefer-default-export */
var config = baseConfig.default[process.env.REACT_APP_ENV || 'production'];
// console.log("ENV: ", process.env.REACT_APP_ENV);
// console.log("CONFIG: ", baseConfig.default);

var endpoints = config.endpoints;

var AUTH_BASE_ENDPOINT = exports.AUTH_BASE_ENDPOINT = '' + endpoints.auth;