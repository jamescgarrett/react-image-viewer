import { combineReducers } from 'redux';

import data from './data';
import ui from './ui';
import slider from './slider';
import lightbox from './lightbox';

export default combineReducers({
  data,
  ui,
  slider,
  lightbox,
});
