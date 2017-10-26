import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { ApplicationState } from '../store';
import { LayoutState } from '../store/layout/types';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    height: '100%',
    marginTop: 0
  }
});

type CounterProps = LayoutState & RouteProps;

class AppContainer extends React.Component<CounterProps> {
  public render() {
    return (
      <div className={css(styles.root)}>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  isMaximized: state.layout.isMaximized
});

export default connect(mapStateToProps)(AppContainer);
