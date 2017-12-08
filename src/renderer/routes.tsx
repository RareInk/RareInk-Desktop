import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProjectsSidebar from './containers/Sidebar';
import App from './containers/App';
import Home from './containers/Home';
import Projects from './containers/Projects';

export const routes = (
  <App>
    <ProjectsSidebar />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
    </Switch>
  </App>
);
