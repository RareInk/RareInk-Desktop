import * as React from 'react';
import { Route } from 'react-router';
import { style } from 'typestyle';
import { routes } from './routes';

import { SidebarHeader } from './components/SidebarHeader';

const rootClass = style({
  display: 'grid',
  gridTemplateColumns: '240px auto',
  height: '100%',
  marginTop: 0
});

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
  <div className={rootClass}>
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
  </div>
);
