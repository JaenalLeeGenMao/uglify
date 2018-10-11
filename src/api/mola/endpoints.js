/* eslint-disable import/prefer-default-export */
// import { api } from '@source/config';
// const { config } = api;

// import config from '../../config.base';

const api = 'http://mola.lukitomo.com/v2';

export const HOME_PLAYLIST_ENDPOINT = `/videos/playlists`;

export const VIDEOS_ENDPOINT = `/videos/videos`;

export const HISTORY_ENDPOINT = `/userdata`;

export const SEARCH_ENDPOINT = `/search/`;
export const SEARCH_GENRE_ENDPOINT = `/videos/playlists/genre`;
export const RECENT_SEARCH_ENDPOINT = `${SEARCH_ENDPOINT}histories`;
//'https://private-697ce-search103.apiary-mock.com/recentsearch'; //'http://lukitomo.com:1111/histories?project=molatv&sessionId=abc';

export const MOVIE_DETAIL_ENDPOINT = `/videos`;
export const MOVIE_STREAMING = `/videos`;

// export const MOVIE_DETAIL_ENDPOINT = 'https://private-55a17-molawebver3.apiary-mock.com/videos';
// export const MOVIE_STREAMING = 'https://private-55a17-molawebver3.apiary-mock.com/videos';
