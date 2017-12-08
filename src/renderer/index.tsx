import { webFrame } from 'electron';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { createHashHistory } from 'history';
import configureStore from './configureStore';

import 'normalize.css/normalize.css';
import './styles/globals.scss';

// Import the root element this way to support hot reloading
import * as RootModule from './Root';
let root = RootModule.root;

// Disable zoom
webFrame.setVisualZoomLevelLimits(1.0, 1.0);

const history = createHashHistory();
const store = configureStore(history);

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history} children={root} />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept('./Root', () => {
    root = require<typeof RootModule>('./Root').root;
    renderApp();
  });
}
