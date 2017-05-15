import {
  UPDATE_LIGHTBOX,
  CLOSE_LIGHTBOX,
} from '../constants';

const initialState = {
  uri: '',
  open: false,
};

export default function lightbox(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_LIGHTBOX:
      return {
        uri: payload.uri,
        open: payload.open,
      };
    case CLOSE_LIGHTBOX:
      return {
        uri: payload.uri,
        open: payload.open,
      };
    default:
      return state;
  }
}
