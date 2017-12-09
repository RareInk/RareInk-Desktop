import * as React from 'react';
import Modal from 'react-modal';
import { ipcRenderer } from 'electron';
import { style } from 'typestyle';
import { modalStyles } from '../utils/styles';

import ComponentPlayground from '../playground/ComponentPlayground';

const rootClass = style({
  display: 'grid',
  gridTemplateColumns: '240px auto',
  height: '100%',
  marginTop: 0
});

interface AppState {
  playgroundModalOpen: boolean;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      playgroundModalOpen: false
    };
  }

  public componentDidMount() {
    ipcRenderer.on('rareink:window:toggle-preferences', () => {
      console.log('rareink:window:toggle-preferences');
    });

    ipcRenderer.on('rareink:window:toggle-playground', () => {
      this.togglePlaygroundModal();
    });
  }

  public render () {
    return (
      <div className={rootClass}>
        {this.props.children}
        <Modal
          isOpen={this.state.playgroundModalOpen}
          contentLabel="Component Playground"
          style={modalStyles}
        >
          <ComponentPlayground />
          <button onClick={() => this.togglePlaygroundModal()}>Close</button>
        </Modal>
      </div>
    );
  }

  private togglePlaygroundModal() {
    this.setState({ playgroundModalOpen: !this.state.playgroundModalOpen });
  }
}
