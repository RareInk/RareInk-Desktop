import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import routes from './routes';

import 'normalize.css/normalize.css';
import 'common/styles/globals.scss';

const history = createBrowserHistory();
const store = configureStore();

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history} children={routes} />
    </Provider>,
    document.getElementById('app')
  );
};

export default renderApp;
