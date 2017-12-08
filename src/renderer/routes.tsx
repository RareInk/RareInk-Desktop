import * as React from 'react';
import { RouteProps } from 'react-router';

import Home from './containers/Home';
import HomeSidebar from './containers/HomeSidebar';
import Projects from './containers/Projects';

export interface RoutesDefinition extends RouteProps {
  sidebar: any;
  main: any;
}

export const routes: RoutesDefinition[] = [
  {
    path: '/',
    exact: true,
    sidebar: HomeSidebar,
    main: Home
  },
  {
    path: '/projects',
    sidebar: () => <div>ProjectsSidebar</div>,
    main: Projects
  }
];
