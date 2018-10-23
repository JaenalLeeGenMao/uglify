'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovieDetail = undefined;

var _mola = require('../api/mola');

var _mola2 = _interopRequireDefault(_mola);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMovieDetail = function getMovieDetail(id) {
  return function (dispatch) {
    dispatch({
      type: _constants2.default.GET_MOVIE_DETAIL_LOADING,
      payload: {
        meta: {
          status: "loading",
          error: ''
        },
        data: []
      }
    });
    return _mola2.default.getMovieDetail({ id: id }).then(function (result) {
      if (result.meta.status === "error") {
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

exports.getMovieDetail = getMovieDetail;