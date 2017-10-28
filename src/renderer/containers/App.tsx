import { ipcRenderer, shell, remote } from 'electron';
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import ProjectsSidebar from './Sidebar';

const styles = StyleSheet.create({
  root: {
    display: 'grid',
    gridTemplateColumns: '240px auto',
    height: '100%',
    marginTop: 0
  }
});

interface CounterState {
  isMaximized: boolean;
}

class App extends React.Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMaximized: false
    };

    this.initElectronListeners();
  }
  public render() {
    return (
      <div className={css(styles.root)}>
        <ProjectsSidebar />
        {this.props.children}
      </div>
    );
  }

  public initElectronListeners() {
    ipcRenderer.on('rareink:generic:pong', () => {
      shell.beep();
    });

    ipcRenderer.on('rareink:menu:open-about', () => {
      // TODO: Move this to main process.
      remote.dialog.showMessageBox({
        title: 'About RareInk',
        message: 'RareInk',
        detail: 'You\'re running a development copy of RareInk. Stuff might not exist yet.'
      });
    });
  }
}

export default App;
