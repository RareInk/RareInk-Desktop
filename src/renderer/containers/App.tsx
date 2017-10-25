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

class Layout extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={css(styles.root)}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
