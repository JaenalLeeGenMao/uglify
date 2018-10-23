'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _runtime = require('./runtime');

var _runtime2 = _interopRequireDefault(_runtime);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _movieDetail = require('./movie-detail');

var _movieDetail2 = _interopRequireDefault(_movieDetail);

var _movieLibrary = require('./movie-library');

var _movieLibrary2 = _interopRequireDefault(_movieLibrary);

var _movieStream = require('./movie-stream');

var _movieStream2 = _interopRequireDefault(_movieStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  user: _user2.default,
  runtime: _runtime2.default,
  home: _home2.default,
  history: _history2.default,
  search: _search2.default,
  movieDetail: _movieDetail2.default,
  movieLibrary: _movieLibrary2.default,
  movieStream: _movieStream2.default
});