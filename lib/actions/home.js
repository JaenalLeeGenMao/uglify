'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateActivePlaylist = exports.getHomeVideo = exports.getHomePlaylist = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable import/prefer-default-export */


var _common = require('../api/common');

var _common2 = _interopRequireDefault(_common);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getHomePlaylist = exports.getHomePlaylist = function getHomePlaylist() {
  return function (dispatch) {
    dispatch({
      type: _constants2.default.GET_HOME_PLAYLIST_LOADING,
      payload: {
        meta: {
          status: 'loading',
          error: ''
        },
        data: []
      }
    });
    return _common2.default.getHomePlaylist().then(function (result) {
      if (result.meta.status === 'error') {
        dispatch({
          type: _constants2.default.GET_HOME_PLAYLIST_ERROR,
          payload: result
        });
      } else {
        dispatch({
          type: _constants2.default.GET_HOME_PLAYLIST_SUCCESS,
          payload: result
        });
      }
    });
  };
};

var getHomeVideo = exports.getHomeVideo = function getHomeVideo(playlist) {
  return function (dispatch) {
    return _common2.default.getHomeVideo({ id: playlist.id }).then(function (result) {
      result = {
        meta: {
          status: result.meta.status,
          id: playlist.id,
          sortOrder: playlist.sortOrder
        },
        data: [playlist].concat(result.data)
      };
      dispatch({
        type: _constants2.default.GET_HOME_VIDEO,
        payload: result
      });
    });
  };
};

var updateActivePlaylist = exports.updateActivePlaylist = function updateActivePlaylist(id) {
  return function (dispatch, getState) {
    var store = getState(),
        _store$home$playlists = store.home.playlists,
        meta = _store$home$playlists.meta,
        playlistsData = _store$home$playlists.data,
        data = playlistsData.map(function (playlist) {
      if (playlist.id === id) {
        return _extends({}, playlist, { isActive: true });
      }
      return _extends({}, playlist, { isActive: false });
    });

    return dispatch({
      type: _constants2.default.UPDATE_ACTIVE_PLAYLIST,
      payload: {
        meta: _extends({}, meta),
        data: [].concat(_toConsumableArray(data))
      }
    });
  };
};