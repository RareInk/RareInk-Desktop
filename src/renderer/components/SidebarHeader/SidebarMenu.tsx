import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarOptions = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-gray-400);
  border-bottom: 1px solid var(--color-gray-400);
`;

const SidebarOption = styled(Link)`
  display: block;
  padding: .5rem 1rem;
  cursor: pointer;
  color: inherit;

  &:hover, &:focus {
    color: var(--color-blue);
    background-color: var(--color-gray-200);
    text-decoration: none;
  }
`;

const SidebarSpacer = styled.hr`
  margin: 0;
  border: 0;
  border-top: 1px solid var(--color-gray-400);
`;

interface SidebarMenuProps extends React.HTMLProps<HTMLDivElement> {
  isVisible: boolean;
}

const SidebarMenu: React.SFC<SidebarMenuProps> = ({ isVisible }) => {
  return (
    <React.Fragment>
      {isVisible
        ? <SidebarOptions>
          <SidebarOption to="/">Home</SidebarOption>
          <SidebarOption to="/projects">Projects</SidebarOption>
          <SidebarOption to="/">Option3</SidebarOption>
          <SidebarSpacer />
          <SidebarOption to="/">More Projects...</SidebarOption>
          <SidebarOption to="/">Create New Project...</SidebarOption>
        </SidebarOptions>
        : ''
      }
    </React.Fragment>
  );
};

export default SidebarMenu;
