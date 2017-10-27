import { remote } from 'electron';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class About extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1>About RareInk</h1>
        <p>Version {remote.app.getVersion()}.</p>
      </div>
    );
  }
}
