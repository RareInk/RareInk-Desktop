import * as React from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';

const routes = (
  <App>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </App>
);

export default routes;
