import {
  SLIDE,
} from '../constants';

const initialState = {
  currentSlide: 0,
};

export default function slider(state = initialState, { type, payload }) {
  switch (type) {
    case SLIDE:
      return {
        ...state,
        currentSlide: payload,
      };
    default:
      return state;
  }
}
