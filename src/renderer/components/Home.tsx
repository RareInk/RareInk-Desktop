import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
  public render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application.</p>
      </div>
    );
  }
}
