import * as React from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';

const routes = (
  <App>
    <Route exact path="/" component={Home} />
    <Route path="/projects" />
  </App>
);

export default routes;
