import * as React from 'react';
import SidebarHeader from '../components/SidebarHeader/SidebarHeader';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid var(--color-gray-400)'
  }
});

class Sidebar extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className={css(styles.sidebar)}>
        <SidebarHeader />
        <div>
          ProjectsSidebar
        </div>
      </div>
    );
  }
}

export default Sidebar;
