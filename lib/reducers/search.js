'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = searchResult;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchResult() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.GET_SEARCH_GENRE_LOADING:
      return _extends({}, state, { genre: _extends({}, action.payload) });
    case _constants2.default.GET_SEARCH_GENRE_SUCCESS:
      return _extends({}, state, { genre: _extends({}, action.payload) });
    case _constants2.default.GET_SEARCH_GENRE_ERROR:
      return _extends({}, state, { genre: _extends({}, action.payload) });

    case _constants2.default.GET_SEARCH_LOADING:
      return _extends({}, state, { result: _extends({}, action.payload) });
    case _constants2.default.GET_SEARCH_SUCCESS:
      return _extends({}, state, { result: _extends({}, action.payload) });
    case _constants2.default.GET_SEARCH_ERROR:
      return _extends({}, state, { result: _extends({}, action.payload) });
    case _constants2.default.GET_SEARCH_NO_RESULT:
      return _extends({}, state, {
        result: {
          meta: {
            status: 'no_result',
            error: ''
          },
          data: []
        }
      });
    case _constants2.default.GET_RECENT_SEARCH_LOADING:
      return _extends({}, state, { recentSearch: _extends({}, action.payload) });
    case _constants2.default.GET_RECENT_SEARCH_SUCCESS:
      return _extends({}, state, { recentSearch: _extends({}, action.payload) });
    case _constants2.default.GET_RECENT_SEARCH_ERROR:
      return _extends({}, state, { recentSearch: _extends({}, action.payload) });

    default:
      return _extends({}, state, {
        recentSearch: {
          meta: {
            status: 'loading'
          },
          data: []
        },
        result: {
          meta: {
            status: 'loading'
          },
          data: []
        },
        genre: {
          meta: {
            status: 'loading'
          },
          data: []
        }
      });
  }
}