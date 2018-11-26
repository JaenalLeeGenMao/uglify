'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovieDetail = undefined;

var _common = require('../api/common');

var _common2 = _interopRequireDefault(_common);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMovieDetail = exports.getMovieDetail = function getMovieDetail(id) {
  return function (dispatch) {
    dispatch({
      type: _constants2.default.GET_MOVIE_DETAIL_LOADING,
      payload: {
        meta: {
          status: 'loading',
          error: ''
        },
        data: []
      }
    });
    return _common2.default.getMovieDetail({ id: id }).then(function (result) {
      if (result.meta.status === 'error') {
        dispatch({
          type: _constants2.default.GET_MOVIE_DETAIL_ERROR,
          payload: result
        });
      } else {
        dispatch({
          type: _constants2.default.GET_MOVIE_DETAIL_SUCCESS,
          payload: result
        });
      }
    });
  };
};