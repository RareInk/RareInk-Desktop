import { ipcRenderer } from 'electron';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application.</p>
        <button onClick={() => this.handleClick()}>beep</button>
      </div>
    );
  }

  public handleClick() {
    console.log('test');
    ipcRenderer.send('rareink:generic:ping');
  }
}
