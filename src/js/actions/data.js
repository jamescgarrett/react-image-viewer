import fetch from 'isomorphic-fetch';

/** Import Utils. */
import { checkHttpStatus, parseJSON } from '../utils';

/** Import Constants. */
import {
  GET_DATA_REQUEST,
  GET_DATA_REQUEST_FAILURE,
  GET_DATA_REQUEST_SUCCESS,
} from '../constants';

const API_PATH = 'http://localhost:8080';

/** GET_DATA_REQUEST */
export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
});

/** GET_DATA_REQUEST_SUCCESS */
export const getDataRequestSuccess = data => ({
  type: GET_DATA_REQUEST_SUCCESS,
  payload: data,
});

/** GET_DATA_REQUEST_FAILURE */
export const getDataRequestFailure = error => ({
  type: GET_DATA_REQUEST_FAILURE,
  payload: {
    error: error.error,
  },
});

/** getData */
export const getData = () => (dispatch) => {
  dispatch(getDataRequest());

  const paths = window.location.pathname.split('/');
  const loc = paths[1];

  return fetch(`${API_PATH}/slideshow/${loc}.json`, {
    method: 'GET',
    mode: 'cors',
  })
  .then(checkHttpStatus)
  .then(parseJSON)
  .then((response) => {
    dispatch(getDataRequestSuccess(response));
  })
  .catch((err) => {
    dispatch(getDataRequestFailure({ error: err.message }));
  });
};
