'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MOVIE_STREAMING = exports.MOVIE_DETAIL_ENDPOINT = exports.RECENT_SEARCH_ENDPOINT = exports.SEARCH_GENRE_ENDPOINT = exports.SEARCH_ENDPOINT = exports.HISTORY_ENDPOINT = exports.VIDEOS_ENDPOINT = exports.HOME_PLAYLIST_ENDPOINT = undefined;

var _config = require('../../config.base');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _config2.default.default[process.env.REACT_APP_ENV || 'production'];
// console.log("ENV: ", process.env.REACT_APP_ENV);
// console.log("CONFIG: ", baseConfig.default);

/* eslint-disable import/prefer-default-export */
var endpoints = config.endpoints;

var HOME_PLAYLIST_ENDPOINT = exports.HOME_PLAYLIST_ENDPOINT = endpoints.api + '/videos/playlists';

var VIDEOS_ENDPOINT = exports.VIDEOS_ENDPOINT = endpoints.api + '/videos/videos';

var HISTORY_ENDPOINT = exports.HISTORY_ENDPOINT = endpoints.api + '/userdata';

var SEARCH_ENDPOINT = exports.SEARCH_ENDPOINT = endpoints.api + '/search/';
var SEARCH_GENRE_ENDPOINT = exports.SEARCH_GENRE_ENDPOINT = endpoints.api + '/videos/playlists/genre';
var RECENT_SEARCH_ENDPOINT = exports.RECENT_SEARCH_ENDPOINT = SEARCH_ENDPOINT + 'histories';

var MOVIE_DETAIL_ENDPOINT = exports.MOVIE_DETAIL_ENDPOINT = endpoints.api + '/videos';
var MOVIE_STREAMING = exports.MOVIE_STREAMING = endpoints.api + '/videos';

// export const MOVIE_DETAIL_ENDPOINT = 'https://private-55a17-molawebver3.apiary-mock.com/videos';
// export const MOVIE_STREAMING = 'https://private-55a17-molawebver3.apiary-mock.com/videos';