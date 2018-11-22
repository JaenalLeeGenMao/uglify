import types from '../constants';

export default function movieLibrary(state = {}, action) {
  switch (action.type) {
    case types.GET_MOVIE_LIBRARY_LOADING:
      return { ...state, ...action.payload };
    case types.GET_MOVIE_LIBRARY_SUCCESS:
      return { ...state, ...action.payload };
    case types.GET_MOVIE_LIBRARY_ERROR:
      return { ...state, ...action.payload };
    default:
      return {
        ...state,
        meta: {
          status: 'loading'
        },
        data: []
      };
  }
}
