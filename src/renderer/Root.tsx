import * as React from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';
import { routes } from './routes';

import App from './containers/App';
import { SidebarHeader } from './components/SidebarHeader';

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--color-gray-400);
`;

export const root = (
  <App>
    <Sidebar>
      <SidebarHeader projectName="Project Name" />
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.sidebar}
        />
      ))}
    </Sidebar>

    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
  </App>
);
