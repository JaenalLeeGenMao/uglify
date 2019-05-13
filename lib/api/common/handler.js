'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = require('axios');

var _endpoints = require('./endpoints');

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _config = require('@source/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getHomePlaylist = function getHomePlaylist() {
  return (0, _axios.get)(_endpoints.HOME_PLAYLIST_ENDPOINT + '/mola-home', _extends({}, _config.endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeHomePlaylist(response);
    return {
      meta: {
        status: result[0].length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result[0])) || []
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Home');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var getHomeVideo = function getHomeVideo(_ref) {
  var id = _ref.id;

  return (0, _axios.get)(_endpoints.HOME_PLAYLIST_ENDPOINT + '/' + id, _extends({}, _config.endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeHomeVideo(response);
    return {
      meta: {
        status: 'success',
        error: ''
      },
      data: [].concat(_toConsumableArray(result[0])) || []
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Video');
    return {
      meta: {
        status: status,
        error: errorMessage
      },
      data: []
    };
  });
};

var getAllHistory = function getAllHistory(_ref2) {
  var userId = _ref2.userId;

  return (0, _axios.get)(_endpoints.HISTORY_ENDPOINT + '/' + userId + '/videos/histories', _extends({}, _config.endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeHistory(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result'
      },
      data: [].concat(_toConsumableArray(result)) || []
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola History');
    return {
      meta: {
        status: 'error',
        text: errorMessage
      },
      data: []
    };
  });
};

var getSearchResult = function getSearchResult(_ref3) {
  var q = _ref3.q;

  return (0, _axios.get)('' + _endpoints.SEARCH_ENDPOINT, _extends({
    params: { q: q }
  }, _config.endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeSearchResult(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result)) || []
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Search Result');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var getSearchGenre = function getSearchGenre() {
  return (0, _axios.get)('' + _endpoints.SEARCH_GENRE_ENDPOINT, _extends({}, _config.endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeSearchGenre(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result[0])) || []
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Search Genre');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var getRecentSearch = function getRecentSearch(sessionId, sid) {
  return (0, _axios.get)('' + _endpoints.RECENT_SEARCH_ENDPOINT, _extends({
    params: { sessionId: sessionId }
  }, _config.endpoints.setting, {
    headers: { Authorization: 'Bearer ' + sid }
  })).then(function (response) {
    var result = _util2.default.normalizeRecentSearch(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: result.length > 0 ? [].concat(_toConsumableArray(result)) : []
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Recent Search');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var postRecentSearch = function postRecentSearch(sessionId, sid, keyword) {
  (0, _axios.post)(_endpoints.RECENT_SEARCH_ENDPOINT + '?sessionId=' + sessionId + '&q=' + keyword, {}, _extends({}, _config.endpoints.setting, {
    headers: { Authorization: 'Bearer ' + sid }
  })).then(function (result) {
    return {
      meta: {
        status: 'success',
        error: ''
      }
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Update Recent Search');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      }
    };
  });
};

var deleteRecentSearchAll = function deleteRecentSearchAll(sessionId, sid) {
  return (0, _axios.delete)(_endpoints.RECENT_SEARCH_ENDPOINT + '?sessionId=' + sessionId, _extends({}, _config.endpoints.setting, {
    headers: { Authorization: 'Bearer ' + sid }
  })).then(function (result) {
    return {
      meta: {
        status: 'success',
        error: ''
      }
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Removing All Recent Search');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      }
    };
  });
};

var deleteRecentSearch = function deleteRecentSearch(sessionId, sid, keyword) {
  return (0, _axios.delete)(_endpoints.RECENT_SEARCH_ENDPOINT + '?sessionId=' + sessionId + '&q=' + keyword, _extends({}, _config.endpoints.setting, {
    headers: { Authorization: 'Bearer ' + sid }
  })).then(function (result) {
    return {
      meta: {
        status: 'success',
        error: ''
      }
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Removing Recent Search');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      }
    };
  });
};

var getMovieDetail = function getMovieDetail(_ref4) {
  var id = _ref4.id;

  return (0, _axios.get)(_endpoints.MOVIE_DETAIL_ENDPOINT + '/' + id, _extends({}, _config.endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeVideoDetail(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result)) || []
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Movie Detail');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var getMovieLibraryList = function getMovieLibraryList() {
  return (0, _axios.get)('' + _endpoints.VIDEOS_ENDPOINT, _extends({}, _config.endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeMovieLibraryList(response);

    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result)) || []
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola List of Movie Library');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var getMovieLibrary = function getMovieLibrary(id) {
  return (0, _axios.get)(_endpoints.HOME_PLAYLIST_ENDPOINT + '/' + id, _extends({}, _config.endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeMovieLibrary(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result[0])) || []
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Movie Library');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var getHotPlaylist = function getHotPlaylist() {
  return (0, _axios.get)(_endpoints.HOME_PLAYLIST_ENDPOINT + '/mola-hot', _extends({}, _config.endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeHomeVideo(response);
    return {
      meta: {
        status: result[0].length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result[0])) || []
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Hot Playlists');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var getAllSubscriptions = function getAllSubscriptions(token) {
  return (0, _axios.get)('' + _endpoints.SUBSCRIPTION_ENDPOINT, _extends({
    headers: {
      Authorization: 'Bearer ' + token
    },
    params: {
      app_id: 2
    }
  }, _config.endpoints.setting)).then(function (response) {
    return {
      meta: {
        status: 'success',
        error: ''
      },
      data: response.data.data
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola All Subscriptions');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var createOrder = function createOrder(_ref5) {
  var token = _ref5.token,
      uid = _ref5.uid,
      _ref5$subscriptionId = _ref5.subscriptionId,
      subscriptionId = _ref5$subscriptionId === undefined ? 26 : _ref5$subscriptionId,
      _ref5$price = _ref5.price,
      price = _ref5$price === undefined ? 10000 : _ref5$price;

  var data = JSON.stringify({
    order_type_id: 1,
    subscription_id: subscriptionId /* hanya hardcode midtrans 26 */
    , quantity: 1 /* subscription per tahun */
    , uom: 'm' /* sementara monthly */
    , package_expiry: '',
    status: 0,
    user_id: uid,
    order_amount: 1 * price,
    total_price: 1 * price,
    source: 'GSyOzu2WPaAijqbX3Tv6HCQr' /* hardcode dulu nanti baru di pikirin lagi */
    , payment_method_id: 270 /* payment_method_id midtrans di hardcode 270 dari DataBase */
  });

  return (0, _axios.post)('' + _endpoints.ORDER_ENDPOINT, data, _extends({
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    withCredentials: true
  }, _config.endpoints.setting)).then(function (response) {
    var data = response.data.data;

    return {
      meta: {
        status: 'success',
        error: ''
      },
      data: _extends({
        id: data[0].id
      }, data[0].attributes)
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Order');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var createMidtransPayment = function createMidtransPayment(_ref6) {
  var uid = _ref6.uid,
      firstName = _ref6.firstName,
      lastName = _ref6.lastName,
      phoneNumber = _ref6.phoneNumber,
      email = _ref6.email,
      token = _ref6.token,
      orderId = _ref6.orderId;

  var data = JSON.stringify({
    paymentMethodId: 270, // payment_method_id midtrans di hardcode 17 dari DataBase
    Id: '' + orderId,
    title: 'Mola - Paket No Ads',
    phone: phoneNumber,
    email: email,
    name: firstName + ' ' + lastName,
    userId: uid,
    productSku: '1',
    productName: 'Mola - Paket No Ads'
  });

  return (0, _axios.post)('' + _endpoints.PAYMENT_ENDPOINT, data, _extends({
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    withCredentials: true
  }, _config.endpoints.setting)).then(function (response) {
    var paymentData = response.data.paymentData;

    var redirectUrl = _config.endpoints.domain + '/accounts/profile';
    return {
      meta: {
        status: 'success',
        error: ''
      },
      data: _extends({}, paymentData, { redirectUrl: redirectUrl })
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola Midtrans Payment');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: ''
    };
  });
};
var getOrderHistoryTransactions = function getOrderHistoryTransactions(_ref7) {
  var uid = _ref7.uid,
      token = _ref7.token;

  console.log('token', token);
  return (0, _axios.get)(_endpoints.ORDER_ENDPOINT + '_/users/' + uid, _extends({
    headers: token && { Authorization: 'Bearer ' + token },
    withCredentials: true
  }, _config.endpoints.setting)).then(function (response) {
    var data = response.data.data;

    return {
      meta: {
        status: 'success',
        error: ''
      },
      data: data
    };
  }).catch(function (error) {
    var errorMessage = error.toString().replace('Error:', 'Mola History Transactions');
    return {
      meta: {
        status: 'error',
        error: errorMessage
      },
      data: []
    };
  });
};

var getCSRF = function getCSRF() {
  return (0, _axios.get)(_endpoints.CSRF_ENDPOINT, _extends({}, _config.endpoints.setting)).then(function (response) {
    console.log("response", response);
    var result = response.data ? response.data : null;
    return {
      meta: {
        status: 'success',
        error: ''
      },
      data: result
    };
  }).catch(function (error) {
    console.log("ERRROR", error);
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: []
    };
  });
};

exports.default = {
  getHomePlaylist: getHomePlaylist,
  getHomeVideo: getHomeVideo,
  getAllHistory: getAllHistory,
  getSearchResult: getSearchResult,
  getSearchGenre: getSearchGenre,
  getRecentSearch: getRecentSearch,
  postRecentSearch: postRecentSearch,
  deleteRecentSearch: deleteRecentSearch,
  deleteRecentSearchAll: deleteRecentSearchAll,
  getMovieDetail: getMovieDetail,
  getMovieLibrary: getMovieLibrary,
  getMovieLibraryList: getMovieLibraryList,
  getHotPlaylist: getHotPlaylist,
  getAllSubscriptions: getAllSubscriptions,
  createOrder: createOrder,
  createMidtransPayment: createMidtransPayment,
  getOrderHistoryTransactions: getOrderHistoryTransactions,
  getCSRF: getCSRF
};