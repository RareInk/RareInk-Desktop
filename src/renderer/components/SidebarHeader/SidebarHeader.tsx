import * as React from 'react';
import { style } from 'typestyle';

import SidebarMenu from './SidebarMenu';

const rootClass = style({
  display: 'flex',
  height: '42px',
  backgroundColor: 'var(--brand-color-wine-red)',
  color: 'var(--color-white)'
});

const projectNameClass = style({
  display: 'flex',
  flex: 'auto',
  alignItems: 'center',
  padding: '0 var(--spacer)'
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
      <div className={rootClass}>
        <div className={projectNameClass}>{this.props.projectName}</div>
        <SidebarMenu />
      </div>
    );
  }
}

export default SidebarHeader;
