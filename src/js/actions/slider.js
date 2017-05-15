/** Import Constants. */
import {
  SLIDE,
} from '../constants';

/** SLIDE */
export const slideRequest = slide => ({
  type: SLIDE,
  payload: slide,
});

/** slide */
export const slide = (sliderLength, currentSlide, type) => (dispatch) => {
  switch (type) {
    case 'next':
      if (currentSlide === sliderLength - 1) {
        dispatch(slideRequest(0));
      } else {
        dispatch(slideRequest(currentSlide + 1));
      }
      break;
    case 'prev':
      if (currentSlide !== 0) {
        dispatch(slideRequest(currentSlide - 1));
      }
      break;
    default:
      break;
  }
};
