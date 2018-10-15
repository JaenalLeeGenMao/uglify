'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllHistory = undefined;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _mola = require('../api/mola');

var _mola2 = _interopRequireDefault(_mola);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllHistory = exports.getAllHistory = function getAllHistory(userId) {
  return function (dispatch) {
    dispatch({
      type: _constants2.default.GET_HISTORY_LOADING,
      payload: {
        meta: {
          status: 'loading',
          error: ''
        },
        data: []
      }
    });
    return _mola2.default.getAllHistory({ userId: userId }).then(function (result) {
<<<<<<< HEAD
      if (result.meta.status === 'error') {
        console.log('ERRORRR');
=======
      if (result.meta.status === "error") {
>>>>>>> remove console.log, add default layout theoplayer to be full screen, add property classname
        dispatch({
          type: _constants2.default.GET_HISTORY_ERROR,
          payload: result
        });
      } else {
<<<<<<< HEAD
        console.log('SUKSSESSS');
=======
>>>>>>> remove console.log, add default layout theoplayer to be full screen, add property classname
        dispatch({
          type: _constants2.default.GET_HISTORY_SUCCESS,
          payload: result
        });
      }
    });
  };
};