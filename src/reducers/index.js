// import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import home from './home';
import history from './history';
import search from './search';
import movieDetail from './movie-detail';
import movieLibrary from './movie-library';
import movieStream from './movie-stream';

import { reducer as toastr } from 'react-redux-toastr';

export { user, runtime, home, history, search, movieDetail, movieLibrary, movieStream, toastr };
