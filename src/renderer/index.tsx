import { webFrame } from 'electron';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { createHashHistory } from 'history';
import configureStore from './configureStore';
import * as RoutesModule from './routes';
let routes = RoutesModule.routes;

import 'normalize.css/normalize.css';
import './styles/globals.scss';

// Disable zoom
webFrame.setVisualZoomLevelLimits(1.0, 1.0);

const history = createHashHistory();
const store = configureStore(history);

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history} children={routes} />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept('./routes', () => {
    routes = require<typeof RoutesModule>('./routes').routes;
    renderApp();
  });
}
