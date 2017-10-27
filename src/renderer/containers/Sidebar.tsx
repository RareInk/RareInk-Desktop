import * as React from 'react';
import SidebarHeader from '../components/SidebarHeader/SidebarHeader';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  sidebar: {
    borderRight: '1px solid var(--color-gray-400)'
  }
});

class Sidebar extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={css(styles.sidebar)}>
        <SidebarHeader />
        ProjectsSidebar
      </div>
    );
  }
}

export default Sidebar;
