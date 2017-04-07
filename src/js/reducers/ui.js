import {
  UPDATE_UI,
} from '../constants';

const initialState = {
  viewStatus: 'slider',
};

export default function ui(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_UI:
      return {
        viewStatus: payload,
      };
    default:
      return state;
  }
}
