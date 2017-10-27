/* tslint:disable:max-line-length */

import { ipcRenderer } from 'electron';
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import './TitleBar.scss';

const styles = StyleSheet.create({
  button: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppRegion: 'no-drag',
    cursor: 'default',
    width: '46px',
    height: '100%',
    lineHeight: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  regular: {
    ':hover': {
      transition: 'background-color 0.1s',
      backgroundColor: 'rgba(255, 255, 255, .13)'
    },

    ':active': {
      backgroundColor: 'rgba(255, 255, 255, .23)'
    }
  },
  close: {
    ':hover': {
      transition: 'background-color 0.1s',
      backgroundColor: '#e81123'
    },

    ':active': {
      backgroundColor: '#f1707a'
    }
  },
  icon: {
    width: '10px',
    height: '10px'
  }
});

interface TitleBarButtonProps {
  onClick: () => any;
}

interface MaximizeButtonProps extends TitleBarButtonProps {
  isMaximized: boolean;
}

interface TitleBarState {
  isMaximised: boolean;
}

const TitleBarMenuButton: React.SFC<TitleBarButtonProps> = () => (
  <a title="Menu" className={css(styles.button, styles.regular)}>
    <svg x="0px" y="0px" viewBox="0 0 10.2 9" className={css(styles.icon)}>
      <line stroke="#ffffff" strokeWidth="1" x1="0" y1="0" x2="10.2" y2="0" />
      <line stroke="#ffffff" strokeWidth="1" x1="0" y1="4" x2="10.2" y2="4" />
      <line stroke="#ffffff" strokeWidth="1" x1="0" y1="8" x2="10.2" y2="8" />
    </svg>
  </a>
);

const TitleBarCloseButton: React.SFC<TitleBarButtonProps> = ({ onClick }) => (
  <a title="Close" className={css(styles.button, styles.close)} onClick={onClick}>
    <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" className={css(styles.icon)}>
      <polygon fill="#ffffff" points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 "></polygon>
    </svg>
  </a>
);

const TitleBarMaximizeButton: React.SFC<MaximizeButtonProps> = ({ isMaximized, onClick }) => (
  <a title={isMaximized ? 'Restore' : 'Maximize'} className={css(styles.button, styles.regular)} onClick={onClick}>
    {
      isMaximized
        ? <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" className={css(styles.icon)}>
            <path fill="#ffffff" d="M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z"></path>
          </svg>
        : <svg x="0px" y="0px" viewBox="0 0 10.2 10.1" className={css(styles.icon)}>
            <path fill="#ffffff" d="M0,0v10.1h10.2V0H0z M9.2,9.2H1.1V1h8.1V9.2z"></path>
          </svg>
    }
  </a>
);

const TitleBarMinimizeButton: React.SFC<TitleBarButtonProps> = ({ onClick }) => (
  <a title="Minimize" className={css(styles.button, styles.regular)} onClick={onClick}>
    <svg x="0px" y="0px" viewBox="0 0 10.2 1" className={css(styles.icon)}>
      <line stroke="#ffffff" strokeWidth="1" x1="0" y1="0" x2="10.2" y2="0" />
    </svg>
  </a>
);

export default class TitleBar extends React.Component<{}, TitleBarState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isMaximised: false
    };
  }

  public render() {
    return (
      <div className="title-bar">
        <div className="window-controls">
          <TitleBarMenuButton onClick={this.handleMenuButtonClick} />
        </div>
        <div className="title">title</div>
        <div className="window-controls">
          <TitleBarMinimizeButton onClick={this.handleMinimizeButtonClick} />
          <TitleBarMaximizeButton isMaximized={this.state.isMaximised} onClick={this.handleMaximizeButtonClick} />
          <TitleBarCloseButton onClick={this.handleCloseButtonClick} />
        </div>
      </div>
    );
  }

  public handleMenuButtonClick = () => {
    ipcRenderer.send('rareink:window:togglemenu');
  }

  public handleMinimizeButtonClick = () => {
    ipcRenderer.send('rareink:window:minimize');
  }

  public handleMaximizeButtonClick = () => {
    ipcRenderer.send('rareink:window:maximize');
  }

  public handleCloseButtonClick = () => {
    ipcRenderer.send('rareink:window:close');
  }
}
