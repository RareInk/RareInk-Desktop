import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';

export const routes = (
  <App>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </App>
);
