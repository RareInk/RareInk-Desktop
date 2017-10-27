import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { ApplicationState } from '../store';

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
  }
  public render() {
    return (
      <div className={css(styles.root)}>
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;
