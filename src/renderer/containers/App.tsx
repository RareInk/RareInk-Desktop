import { ipcRenderer, shell } from 'electron';
import * as React from 'react';
import { style } from 'typestyle';

const rootClass = style({
  display: 'grid',
  gridTemplateColumns: '240px auto',
  height: '100%',
  marginTop: 0
});

interface AppState {
  isMaximized: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMaximized: false
    };

    this.initElectronListeners();
  }
  public render() {
    return (
      <div className={rootClass}>
        {this.props.children}
      </div>
    );
  }

  public initElectronListeners() {
    ipcRenderer.on('rareink:generic:pong', () => {
      shell.beep();
    });
  }
}

export default App;
