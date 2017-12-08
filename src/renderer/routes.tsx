import * as React from 'react';
import { RouteProps } from 'react-router';

import Home from './containers/Home';
import Projects from './containers/Projects';

export interface RoutesDefinition extends RouteProps {
  sidebar: any;
  main: any;
}

export const routes: RoutesDefinition[] = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>HomeSidebar</div>,
    main: Home
  },
  {
    path: '/projects',
    sidebar: () => <div>ProjectsSidebar</div>,
    main: Projects
  }
];
