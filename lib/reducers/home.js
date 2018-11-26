'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = home;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  playlists: {
    meta: {
      status: 'loading'
    },
    data: []
  },
  videos: {
    meta: {
      status: 'loading'
    },
    data: []
  }
};

function home() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.GET_HOME_PLAYLIST_LOADING:
      return _extends({}, state, { playlists: _extends({}, action.payload) });
    case _constants2.default.GET_HOME_PLAYLIST_SUCCESS:
      return _extends({}, state, { playlists: _extends({}, action.payload) });
    case _constants2.default.GET_HOME_PLAYLIST_ERROR:
      return _extends({}, state, { playlists: _extends({}, action.payload) });
    case _constants2.default.GET_HOME_VIDEO:
      var result = [].concat(_toConsumableArray(state.videos.data)),
          status = void 0;
      var index = (0, _util.findIndexByKeyValue)(result, 'id', action.payload.meta.id),
          filteredStatus = state.videos.data.filter(function (_ref) {
        var meta = _ref.meta;
        return meta.status === 'error';
      }).length > 0;

      if (filteredStatus) {
        status = 'error';
      } else if (state.videos.data.length < state.playlists.data.length - 1) {
        status = 'loading';
      } else {
        status = 'success';
      }

      if (index === -1) {
        result.push(_extends({}, action.payload));
        result = result.sort(function (a, b) {
          return a.meta.sortOrder - b.meta.sortOrder;
        });
      }

      return _extends({}, state, {
        videos: _extends({}, state.videos, {
          meta: { status: status, error: status === 'error' ? 'API Video failed' : '' },
          data: result
        })
      });
    case _constants2.default.UPDATE_ACTIVE_PLAYLIST:
      return _extends({}, state, { playlists: _extends({}, action.payload) });
    default:
      return _extends({}, initialState, state);
  }
}