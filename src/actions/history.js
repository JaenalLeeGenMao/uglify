import types from '../constants';
import Mola from '../api/mola';

export const getAllHistory = userId => dispatch => {
  dispatch({
    type: types.GET_HISTORY_LOADING,
    payload: {
      meta: {
        status: 'loading',
        error: ''
      },
      data: []
    }
  });
  return Mola.getAllHistory({ userId })
    .then(result => {
      if (result.meta.status === "error") {
        dispatch({
          type: types.GET_HISTORY_ERROR,
          payload: result,
        });
      } else {
        dispatch({
          type: types.GET_HISTORY_SUCCESS,
          payload: result,
        });
      }
    });
};
