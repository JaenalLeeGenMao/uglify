'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/prefer-default-export */
// import { api } from '@source/config';
// const { config } = api;

// import config from '../../config.base';

var api = 'http://mola.lukitomo.com/v2';

var HOME_PLAYLIST_ENDPOINT = exports.HOME_PLAYLIST_ENDPOINT = '/videos/playlists';

var VIDEOS_ENDPOINT = exports.VIDEOS_ENDPOINT = '/videos/videos';

var HISTORY_ENDPOINT = exports.HISTORY_ENDPOINT = '/userdata';

var SEARCH_ENDPOINT = exports.SEARCH_ENDPOINT = '/search/';
var SEARCH_GENRE_ENDPOINT = exports.SEARCH_GENRE_ENDPOINT = '/videos/playlists/genre';
var RECENT_SEARCH_ENDPOINT = exports.RECENT_SEARCH_ENDPOINT = SEARCH_ENDPOINT + 'histories';
//'https://private-697ce-search103.apiary-mock.com/recentsearch'; //'http://lukitomo.com:1111/histories?project=molatv&sessionId=abc';

var MOVIE_DETAIL_ENDPOINT = exports.MOVIE_DETAIL_ENDPOINT = '/videos';
var MOVIE_STREAMING = exports.MOVIE_STREAMING = '/videos';

// export const MOVIE_DETAIL_ENDPOINT = 'https://private-55a17-molawebver3.apiary-mock.com/videos';
// export const MOVIE_STREAMING = 'https://private-55a17-molawebver3.apiary-mock.com/videos';