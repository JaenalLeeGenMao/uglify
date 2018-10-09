import types from '../constants';

export default function history(state = {}, action) {
  switch (action.type) {
  case types.GET_HISTORY_LOADING:
    return { ...state, ...action.payload };
  case types.GET_HISTORY_SUCCESS:
    return { ...state, ...action.payload };
  case types.GET_HISTORY_ERROR:
    return { ...state, ...action.payload };
  default:
    return {
      ...state,
      meta: {
        status: "loading"
      },
      data: []
    };
  }
}
