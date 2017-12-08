import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { style } from 'typestyle';

import ProjectNoMatch from './ProjectNoMatch';

const root = style({
  display: 'flex',
  width: '100%',
  height: '100%'
});

const inner = style({
  display: 'block',
  maxWidth: '75%'
});

export default class Projects extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props: RouteComponentProps<{}>) {
    super(props);
  }

  public render() {
    return (
      <Switch>
        <Route path="/" component={() => <div>Projects</div>} />
        <Route path="/:id" />
        <Route component={ProjectNoMatch}/>
      </Switch>
    );
  }
}
