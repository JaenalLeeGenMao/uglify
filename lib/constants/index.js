'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable import/prefer-default-export */


var _home = require('./home');

var home = _interopRequireWildcard(_home);

var _history = require('./history');

var history = _interopRequireWildcard(_history);

var _search = require('./search');

var search = _interopRequireWildcard(_search);

var _user = require('./user');

var user = _interopRequireWildcard(_user);

var _movieDetail = require('./movie-detail');

var movieDetail = _interopRequireWildcard(_movieDetail);

var _movieLibrary = require('./movie-library');

var movieLibrary = _interopRequireWildcard(_movieLibrary);

var _movieStream = require('./movie-stream');

var movieStream = _interopRequireWildcard(_movieStream);

var _notFound = require('./not-found');

var notFound = _interopRequireWildcard(_notFound);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
exports.default = _extends({
  SET_RUNTIME_VARIABLE: SET_RUNTIME_VARIABLE
}, home, history, search, user, movieDetail, movieLibrary, movieStream, notFound);