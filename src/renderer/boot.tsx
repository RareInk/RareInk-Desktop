import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createHashHistory } from 'history';
import configureStore from './configureStore';
import routes from './routes';

import 'normalize.css/normalize.css';
import './styles/globals.scss';

const history = createHashHistory();
const store = configureStore(history);

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history} children={routes} />
    </Provider>,
    document.getElementById('app')
  );
};

export default renderApp;
