import * as React from 'react';
import { Route } from 'react-router';
import { style } from 'typestyle';
import { routes } from './routes';

import App from './containers/App';
import { SidebarHeader } from './components/SidebarHeader';

const sidebarClass = style({
  display: 'flex',
  flexDirection: 'column',
  borderRight: '1px solid var(--color-gray-400)',

  $nest: {
    [`& .childClass`]: {
      color: 'red'
    }
  }
});

export const root = (
  <App>
    <aside className={sidebarClass}>
      <SidebarHeader projectName="Project Name" />
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.sidebar}
        />
      ))}
    </aside>

    <main>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </main>
  </App>
);
