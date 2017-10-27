import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  sidebarHeader: {
    padding: 'var(--spacer) var(--spacer-vertical)',
    backgroundColor: 'var(--brand-color-wine-red)',
    color: 'var(--color-white)'
  }
});

class SidebarHeader extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={css(styles.sidebarHeader)}>
        SidebarHeader
      </div>
    );
  }
}

export default SidebarHeader;
