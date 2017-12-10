import * as React from 'react';
import Modal from 'react-modal';
import { ipcRenderer } from 'electron';
import styled from 'styled-components';
import { modalStyles } from '../utils/react-modal';

import ComponentPlayground from '../playground/ComponentPlayground';
import { ModalHeader, ModalContent } from '../components/Modal';

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  height: 100%;
  margin-top: 0;
`;

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
      <AppWrapper>
        {this.props.children}
        <Modal
          isOpen={this.state.playgroundModalOpen}
          contentLabel="Component Playground"
          style={modalStyles}
        >
          <ModalHeader
            title="Component Playground"
            onCloseButtonClick={() => this.togglePlaygroundModal()}
          />
          <ModalContent>
            <ComponentPlayground />
          </ModalContent>
        </Modal>
      </AppWrapper>
    );
  }

  private togglePlaygroundModal() {
    this.setState({ playgroundModalOpen: !this.state.playgroundModalOpen });
  }
}
