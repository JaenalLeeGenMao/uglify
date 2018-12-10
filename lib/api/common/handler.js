'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = require('axios');

var _endpoints = require('./endpoints');

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _config = require('../../config.base');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var config = _config2.default.default[process.env.REACT_APP_ENV || 'production'];

var endpoints = config.endpoints;

var getHomePlaylist = function getHomePlaylist() {
  return (0, _axios.get)(_endpoints.HOME_PLAYLIST_ENDPOINT + '/mola-home', _extends({}, endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeHomePlaylist(response);
    return {
      meta: {
        status: result[0].length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result[0])) || []
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: 'Mola loves watchin playlist from home, but Mola is no where to be found'
      },
      data: []
    };
  });
};

var getHomeVideo = function getHomeVideo(_ref) {
  var id = _ref.id;

  return (0, _axios.get)(_endpoints.HOME_PLAYLIST_ENDPOINT + '/' + id, _extends({}, endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeHomeVideo(response);
    return {
      meta: {
        status: 'success',
        error: ''
      },
      data: [].concat(_toConsumableArray(result[0])) || []
    };
  }).catch(function (error) {
    return {
      meta: {
        status: status,
        error: "Mola loves video but sadly it's not available, cheer up!"
      },
      data: []
    };
  });
};

var getAllHistory = function getAllHistory(_ref2) {
  var userId = _ref2.userId;

  return (0, _axios.get)(_endpoints.HISTORY_ENDPOINT + '/' + userId + '/videos/histories', _extends({}, endpoints.setting)).then(function (response) {
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
        text: 'Mola could not reach through the history, because Mola is positive and stays in the present'
      },
      data: []
    };
  });
};

var getSearchResult = function getSearchResult(_ref3) {
  var q = _ref3.q;

  return (0, _axios.get)('' + _endpoints.SEARCH_ENDPOINT, _extends({
    params: { q: q }
  }, endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeSearchResult(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result)) || []
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: "We've searched every corner of our empire, looks like the your search is history"
      },
      data: []
    };
  });
};

var getSearchGenre = function getSearchGenre() {
  return (0, _axios.get)('' + _endpoints.SEARCH_GENRE_ENDPOINT, _extends({}, endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeSearchGenre(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result[0])) || []
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: 'Searching genre is probably missing, off we go to hunt'
      },
      data: []
    };
  });
};

var getRecentSearch = function getRecentSearch(sessionId, sid) {
  return (0, _axios.get)('' + _endpoints.RECENT_SEARCH_ENDPOINT, _extends({
    params: { sessionId: sessionId }
  }, endpoints.setting, {
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
    return {
      meta: {
        status: 'error',
        error: "Looks like you have not searched recently, what've you been up to?"
      },
      data: []
    };
  });
};

var postRecentSearch = function postRecentSearch(sessionId, sid, keyword) {
  (0, _axios.post)(_endpoints.RECENT_SEARCH_ENDPOINT + '?sessionId=' + sessionId + '&q=' + keyword, {}, _extends({}, endpoints.setting, {
    headers: { Authorization: 'Bearer ' + sid }
  })).then(function (result) {
    return {
      meta: {
        status: 'success',
        error: ''
      }
    };
  }).catch(function (err) {
    return {
      meta: {
        status: 'error',
        error: "Aha! Couldn't add recent search, seems like we detected some spooky search result "
      }
    };
  });
};

var deleteRecentSearchAll = function deleteRecentSearchAll(sessionId, sid) {
  return (0, _axios.delete)(_endpoints.RECENT_SEARCH_ENDPOINT + '?sessionId=' + sessionId, _extends({}, endpoints.setting, {
    headers: { Authorization: 'Bearer ' + sid }
  })).then(function (result) {
    return {
      meta: {
        status: 'success',
        error: ''
      }
    };
  }).catch(function (err) {
    return {
      meta: {
        status: 'error',
        error: 'Sure deleting all your recent search, we will miss you'
      }
    };
  });
};

var deleteRecentSearch = function deleteRecentSearch(sessionId, sid, keyword) {
  return (0, _axios.delete)(_endpoints.RECENT_SEARCH_ENDPOINT + '?sessionId=' + sessionId + '&q=' + keyword, _extends({}, endpoints.setting, {
    headers: { Authorization: 'Bearer ' + sid }
  })).then(function (result) {
    return {
      meta: {
        status: 'success',
        error: ''
      }
    };
  }).catch(function (err) {
    return {
      meta: {
        status: 'error',
        error: 'Recent search is refusing to be removed, since it loves you'
      }
    };
  });
};

var getMovieDetail = function getMovieDetail(_ref4) {
  var id = _ref4.id;

  return (0, _axios.get)(_endpoints.MOVIE_DETAIL_ENDPOINT + '/' + id, _extends({}, endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeVideoDetail(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result)) || []
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: 'Movie details are missing, contact officer Mola immediately'
      },
      data: []
    };
  });
};

var getMovieLibraryList = function getMovieLibraryList() {
  return (0, _axios.get)('' + _endpoints.VIDEOS_ENDPOINT, _extends({}, endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeMovieLibraryList(response);

    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result)) || []
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: 'Apparently Mola is having difficulty to list down movie library'
      },
      data: []
    };
  });
};

var getMovieLibrary = function getMovieLibrary(id) {
  return (0, _axios.get)(_endpoints.HOME_PLAYLIST_ENDPOINT + '/' + id, _extends({}, endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeMovieLibrary(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result[0])) || []
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: "We've searched thoroughly in our Movie Library, your sure you're not entering your password?"
      },
      data: []
    };
  });
};

var getMovieStream = function getMovieStream(_ref5) {
  var id = _ref5.id;

  return (0, _axios.get)(_endpoints.MOVIE_STREAMING + '/' + id).then(function (response) {
    var result = _util2.default.normalizeVideoStream(response);
    return {
      meta: {
        status: result.length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result)) || []
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: 'Something amazing is happening behind the scene, to kickstart your stream make sure to browse other movies'
      },
      data: []
    };
  });
};

var getHotPlaylist = function getHotPlaylist() {
  return (0, _axios.get)(_endpoints.HOME_PLAYLIST_ENDPOINT + '/mola-hot', _extends({}, endpoints.setting)).then(function (response) {
    var result = _util2.default.normalizeHomeVideo(response);
    return {
      meta: {
        status: result[0].length > 0 ? 'success' : 'no_result',
        error: ''
      },
      data: [].concat(_toConsumableArray(result[0])) || []
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: 'Mola is feeling so hot right now,\n Someone bring some hot movies!'
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
  getMovieStream: getMovieStream,
  getHotPlaylist: getHotPlaylist
};