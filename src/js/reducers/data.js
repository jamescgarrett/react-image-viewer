import {
  GET_DATA_REQUEST,
  GET_DATA_REQUEST_FAILURE,
  GET_DATA_REQUEST_SUCCESS,
} from '../constants';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export default function images(state = initialState, { type, payload }) {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_REQUEST_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case GET_DATA_REQUEST_SUCCESS:
      return {
        data: payload,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
}
