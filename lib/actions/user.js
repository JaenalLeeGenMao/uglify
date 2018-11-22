'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.updateSetting = undefined;
exports.setUserVariable = setUserVariable;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _reactReduxToastr = require('react-redux-toastr');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateSetting = exports.updateSetting = function updateSetting(params) {
  return function (dispatch, getState) {
    var token = getState().user.token;

    dispatch(request());
    dispatch(success(params));
  };

  function request() {
    return { type: _constants2.default.UPDATE_SETTING_REQUEST };
  }
  function success(payload) {
    _reactReduxToastr.toastr.success('Notification', 'Config success to updated');
    return { type: _constants2.default.UPDATE_SETTING_SUCCESS, payload: payload };
  }
  function failure(error) {
    return { type: _constants2.default.UPDATE_SETTING_FAILURE };
  }
};
// import { put } from '../lib/request';
var updateProfile = exports.updateProfile = function updateProfile(params) {
  return function (dispatch, getState) {
    var token = getState().user.token;

    dispatch(request());
    dispatch(success(params));
    // put('/update-profile', token, payload)
    //   .then(payload => {
    //     success(payload)
    //   })
    //   .catch(err => {
    //     failure(err)
    //   })
  };

  function request() {
    return { type: _constants2.default.UPDATE_PROFILE_REQUEST };
  }
  function success(payload) {
    _reactReduxToastr.toastr.success('Notification', 'Profile success to updated');
    return { type: _constants2.default.UPDATE_PROFILE_SUCCESS, payload: payload };
  }
  function failure(error) {
    return { type: _constants2.default.UPDATE_PROFILE_FAILURE };
  }
};

function setUserVariable(_ref) {
  var name = _ref.name,
      value = _ref.value;

  return {
    type: _constants2.default.SET_USER_VARIABLE,
    payload: {
      name: name,
      value: value
    }
  };
}