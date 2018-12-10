'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = require('../api/common');

var _common2 = _interopRequireDefault(_common);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
var getHotPlaylist = function getHotPlaylist() {
  return function (dispatch) {
    dispatch({
      type: _constants2.default.GET_HOT_PLAYLIST_LOADING,
      payload: {
        meta: {
          status: 'loading',
          error: ''
        },
        data: []
      }
    });
    return _common2.default.getHotPlaylist().then(function (result) {
      if (result.meta.status === 'error') {
        dispatch({
          type: _constants2.default.GET_HOT_PLAYLIST_ERROR,
          payload: result
        });
      } else {
        dispatch({
          type: _constants2.default.GET_HOT_PLAYLIST_SUCCESS,
          payload: result
        });
      }
    });
  };
};

exports.default = {
  getHotPlaylist: getHotPlaylist
};