'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovieStream = undefined;

var _common = require('../api/common');

var _common2 = _interopRequireDefault(_common);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMovieStream = exports.getMovieStream = function getMovieStream(id) {
  return function (dispatch) {
    dispatch({
      type: _constants2.default.GET_MOVIE_STREAM_LOADING,
      payload: {
        meta: {
          status: 'loading',
          error: ''
        },
        data: []
      }
    });
    return _common2.default.getMovieStream({ id: id }).then(function (result) {
      if (result.meta.status === 'error') {
        dispatch({
          type: _constants2.default.GET_MOVIE_STREAM_ERROR,
          payload: result
        });
      } else {
        dispatch({
          type: _constants2.default.GET_MOVIE_STREAM_SUCCESS,
          payload: result
        });
      }
    });
  };
};