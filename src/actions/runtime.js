/* eslint-disable import/prefer-default-export */

import types from '../constants';

function setRuntimeVariable({ name, value }) {
  return {
    type: types.SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value,
    },
  };
}

export {
  setRuntimeVariable
}