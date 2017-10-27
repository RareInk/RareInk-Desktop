import * as React from 'react';
import { Route } from 'react-router-dom';
import AppContainer from './containers/App';
import Home from './components/Home';

const routes = (
  <AppContainer>
    <Route exact path="/" component={Home} />
    <Route path="/projects" />
  </AppContainer>
);

export default routes;
