import * as React from 'react';
import styled from 'styled-components';

const Icon = require('react-feather');

import SidebarMenu from './SidebarMenu';

const SidebarHeaderInner = styled.div`
  display: flex;
  height: 42px;
  background-color: var(--brand-color-wine-red);
  color: var(--color-white);
`;

const ProjectName = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  padding: 0 var(--spacer);
`;

const SidebarTrigger = styled.div`
  display: flex;
  align-items: center;
  padding-left: var(--spacer);
  padding-right: var(--spacer);
  cursor: pointer;
`;

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
        <SidebarHeaderInner>
          <ProjectName>{this.props.projectName}</ProjectName>
          <SidebarTrigger onClick={() => this.toggleMenu()}>
            <Icon.Menu />
          </SidebarTrigger>
        </SidebarHeaderInner>
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
