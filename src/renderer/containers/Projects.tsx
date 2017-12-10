import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import ProjectNoMatch from './ProjectNoMatch';
import { PageWrapper } from '../components/PageWrapper';

export default class Projects extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props: RouteComponentProps<{}>) {
    super(props);
  }

  public render() {
    return (
      <Switch>
        <Route path="/" component={() => <PageWrapper>Projects</PageWrapper>} />
        <Route path="/:id" />
        <Route component={ProjectNoMatch}/>
      </Switch>
    );
  }
}
