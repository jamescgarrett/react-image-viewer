import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';

import { Root } from './containers';

const store = configureStore(window.__INITIAL_STATE__);

render(<Root store={store} />, document.getElementById('slideshow'));
