import { ipcRenderer, shell } from 'electron';
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    height: '100%',
    marginTop: 0
  }
});

interface CounterState {
  isMaximized: boolean;
}

class AppContainer extends React.Component<{}, CounterState> {
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

export default AppContainer;
