import types from '../constants';
import Mola from '../api/mola';

const getAllHistory = userId => dispatch => {
  dispatch({
    type: types.GET_HISTORY_LOADING,
    payload: {
      meta: {
        status: "loading",
        error: ''
      },
      data: []
    }
  });
  return Mola.getAllHistory({ userId })
    .then(result => {
      if (result.meta.status === "error") {
        console.log("ERRORRR")
        dispatch({
          type: types.GET_HISTORY_ERROR,
          payload: result,
        });
      } else {
        console.log("SUKSSESSS")
        dispatch({
          type: types.GET_HISTORY_SUCCESS,
          payload: result,
        });
      }
    });
};

export {
  getAllHistory
}