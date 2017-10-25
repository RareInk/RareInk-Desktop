import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Home from './components/Home';

const routes = (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </App>
);

export default routes;
