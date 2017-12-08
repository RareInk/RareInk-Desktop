import * as React from 'react';
import * as classnames from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { style } from 'typestyle';
import { DropdownOptions, DropdownOption } from '../Dropdown';

const sidebarOptionsClass = style({
  boxShadow: 'none',
  border: 0,
  borderRadius: 0,
  borderTop: '1px solid var(--color-gray-400)',
  borderBottom: '1px solid var(--color-gray-400)'
});

const menuSpacerClass = style({
  margin: '2px 0',
  border: 0,
  borderTop: '1px solid var(--color-gray-400)'
});

const hidden = style({
  display: 'none'
});

interface SidebarMenuProps extends React.HTMLProps<HTMLDivElement> {
  isVisible: boolean;
}

const SidebarMenu: React.SFC<RouteComponentProps<SidebarMenuProps>> = ({ match, history }) => {
  const { isVisible } = match.params;
  return (
    <DropdownOptions className={classnames(sidebarOptionsClass, isVisible ? hidden : '')}>
      <DropdownOption onClick={() => history.push('/')}>Home</DropdownOption>
      <DropdownOption onClick={() => history.push('/projects')}>Projects</DropdownOption>
      <DropdownOption>Option3</DropdownOption>
      <div className={menuSpacerClass} />
      <DropdownOption>More Projects...</DropdownOption>
      <DropdownOption>Create New Project...</DropdownOption>
    </DropdownOptions>
  );
};

export default withRouter(SidebarMenu);
