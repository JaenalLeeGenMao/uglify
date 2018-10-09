'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _endpoints = require('./endpoints');

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getAllHistory = function getAllHistory(_ref) {
  var userId = _ref.userId;

  return (0, _axios.get)(_endpoints.HISTORY_ENDPOINT + '/' + userId + '/videos/histories').then(function (response) {
    var result = _util2.default.normalizeHistory(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result'
      },
      data: [].concat(_toConsumableArray(result)) || []
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        text: 'history/getAllHistory - ' + error
      },
      data: []
    };
  });
};

exports.default = {
  getAllHistory: getAllHistory
};