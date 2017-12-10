import * as React from 'react';
import { style } from 'typestyle';

const Icon = require('react-feather');

import SidebarMenu from './SidebarMenu';

const sidebarHeaderClass = style({
  display: 'flex',
  height: '42px',
  backgroundColor: 'var(--brand-color-wine-red)',
  color: 'var(--color-white)',
  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, .2)',
  zIndex: 9
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

interface SidebarHeaderState {
  menuIsVisible: boolean;
}

class SidebarHeader extends React.Component<SidebarHeaderProps, SidebarHeaderState> {
  constructor (props: SidebarHeaderProps) {
    super(props);

    this.state = {
      menuIsVisible: false
    };
  }

  public render() {
    return (
      <React.Fragment>
        <div className={sidebarHeaderClass}>
          <div className={projectNameClass}>{this.props.projectName}</div>
          <div className={sidebarTriggerClass} onClick={() => this.toggleMenu()}>
            <Icon.Menu />
          </div>
        </div>
        <SidebarMenu isVisible={this.state.menuIsVisible} />
      </React.Fragment>
    );
  }

  private toggleMenu() {
    return this.setState({
      menuIsVisible: !this.state.menuIsVisible
    });
  }
}

export default SidebarHeader;
