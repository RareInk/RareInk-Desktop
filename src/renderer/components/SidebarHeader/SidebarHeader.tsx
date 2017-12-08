import * as React from 'react';
import { style } from 'typestyle';

const Icon = require('react-feather');

import SidebarMenu from './SidebarMenu';

const sidebarHeaderClass = style({
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

const sidebarTriggerClass = style({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 'var(--spacer)',
  paddingRight: 'var(--spacer)',
  cursor: 'pointer'
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
      <div>
        <div className={sidebarHeaderClass}>
          <div className={projectNameClass}>{this.props.projectName}</div>
          <div className={sidebarTriggerClass}>
            <Icon.Menu />
          </div>
        </div>
        <SidebarMenu />
      </div>
    );
  }
}

export default SidebarHeader;
