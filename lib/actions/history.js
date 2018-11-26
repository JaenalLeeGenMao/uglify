'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllHistory = undefined;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _common = require('../api/common');

var _common2 = _interopRequireDefault(_common);

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
    return _common2.default.getAllHistory({ userId: userId }).then(function (result) {
      if (result.meta.status === 'error') {
        dispatch({
          type: _constants2.default.GET_HISTORY_ERROR,
          payload: result
        });
      } else {
        dispatch({
          type: _constants2.default.GET_HISTORY_SUCCESS,
          payload: result
        });
      }
    });
  };
};