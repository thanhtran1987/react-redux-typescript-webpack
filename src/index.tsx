import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { injectGlobal } from 'styled-components';
import Tiles from './containers/Tiles';
import configureStore from './store/configureStore';
import { initialState } from './store/initialState';

injectGlobal`
  body {
    margin: 0;
    background: #000;
    font-size: 0.625em;
  }
`;

render(
  <Provider store={configureStore(initialState)}>
    <Tiles />
  </Provider>,
  document.getElementById('app')
);
