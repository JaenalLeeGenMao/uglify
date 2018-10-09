import { get, post, delete as axiosDelete } from 'axios';
import {
  HISTORY_ENDPOINT
} from './endpoints';
import utils from './util';

const getAllHistory = ({ userId }) => {
  return get(`${HISTORY_ENDPOINT}/${userId}/videos/histories`)
    .then(response => {
      const result = utils.normalizeHistory(response);
      return {
        meta: {
          status: result.length > 0 ? 'success' : 'no_result'
        },
        data: [...result] || []
      };
    })
    .catch(error => {
      return {
        meta: {
          status: 'error',
          text: `history/getAllHistory - ${error}`
        },
        data: []
      };
    });
};

export default {
  getAllHistory
};
