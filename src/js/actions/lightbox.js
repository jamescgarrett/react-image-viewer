/** Import Constants. */
import {
  UPDATE_LIGHTBOX,
  CLOSE_LIGHTBOX,
} from '../constants';

/** UPDATE_LIGHTBOX */
export const updateLightboxRequest = (uri, open) => ({
  type: UPDATE_LIGHTBOX,
  payload: { uri, open },
});

/** CLOSE_LIGHTBOX */
export const closeLightboxRequest = (uri, open) => ({
  type: CLOSE_LIGHTBOX,
  payload: { uri, open },
});

/** updateLightbox */
export const updateLightbox = (uri, open) => (dispatch) => {
  const isOpen = open ? false : true;
  dispatch(updateLightboxRequest(uri, isOpen));
};

/** closeLightbox */
export const closeLightbox = () => (dispatch) => {
  dispatch(closeLightboxRequest('', false));
};
