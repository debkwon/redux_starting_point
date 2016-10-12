'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Store from './store';
import Albums from './components/Albums';
import AlbumsContainer from './components/AlbumsContainer';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store = {Store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);