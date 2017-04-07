/** Import Constants. */
import {
  UPDATE_UI,
} from '../constants';

/** UPDATE_UI */
export const updateUiRequest = view => ({
  type: UPDATE_UI,
  payload: view,
});

/** updateUi */
export const updateUi = currentView => (dispatch) => {
  let view;
  if (currentView === 'slider') {
    view = 'list';
  } else {
    view = 'slider';
  }
  dispatch(updateUiRequest(view));
};
