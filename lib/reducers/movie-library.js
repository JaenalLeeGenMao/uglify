'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = movieLibrary;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movieLibrary() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.GET_MOVIE_LIBRARY_LOADING:
      return _extends({}, state, action.payload);
    case _constants2.default.GET_MOVIE_LIBRARY_SUCCESS:
      return _extends({}, state, action.payload);
    case _constants2.default.GET_MOVIE_LIBRARY_ERROR:
      return _extends({}, state, action.payload);
    default:
      return _extends({}, state, {
        meta: {
          status: 'loading'
        },
        data: []
      });
  }
}