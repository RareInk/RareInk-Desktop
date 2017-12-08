import * as React from 'react';
import { ipcRenderer } from 'electron';
import { style } from 'typestyle';

const rootClass = style({
  display: 'grid',
  gridTemplateColumns: '240px auto',
  height: '100%',
  marginTop: 0
});

export default class App extends React.Component<{}, {}> {
  public componentDidMount() {
    ipcRenderer.on('rareink:window:toggle-preferences', () => {
      console.log('rareink:window:toggle-preferences');
    });
  }

  public render () {
    return (
      <div className={rootClass}>
        {this.props.children}
      </div>
    );
  }
}
