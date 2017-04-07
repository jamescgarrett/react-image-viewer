import { combineReducers } from 'redux';

import data from './data';
import ui from './ui';
import slider from './slider';

export default combineReducers({
  data,
  ui,
  slider,
});
