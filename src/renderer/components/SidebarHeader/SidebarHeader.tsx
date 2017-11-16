import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  sidebarHeader: {
    padding: 'var(--spacer) var(--spacer-vertical)',
    backgroundColor: 'var(--brand-color-wine-red)',
    color: 'var(--color-white)'
  }
});

interface SidebarHeaderProps {
  projectName: string;
}

class SidebarHeader extends React.Component<SidebarHeaderProps, {}> {
  constructor (props: SidebarHeaderProps) {
    super(props);
  }

  public render() {
    return (
      <div className={css(styles.sidebarHeader)}>
        {this.props.projectName}
      </div>
    );
  }
}

export default SidebarHeader;
