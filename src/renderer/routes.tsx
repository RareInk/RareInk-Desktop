import * as React from 'react';
import { RouteProps } from 'react-router';

import HomeSidebar from './containers/HomeSidebar';

import Home from './pages/Home';
import Projects from './pages/Projects';

export interface RoutesDefinition extends RouteProps {
  sidebar: any;
  main: any;
}

export const routes: RoutesDefinition[] = [
  {
    path: '/',
    exact: true,
    sidebar: HomeSidebar,
    main: Home,
  },
  {
    path: '/projects',
    sidebar: () => <div>ProjectsSidebar</div>,
    main: Projects,
  },
];
