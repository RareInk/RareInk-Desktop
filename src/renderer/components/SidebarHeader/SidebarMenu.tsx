import * as React from 'react';
import { style } from 'typestyle';
import { Dropdown, DropdownTrigger, DropdownOptions, DropdownOption } from '../Dropdown';
import { Link } from 'react-router-dom';

const Icon = require('react-feather');

const sidebarMenuClass = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 var(--spacer)'
});

const sidebarTriggerClass = style({
  cursor: 'pointer'
});

const sidebarOptionsClass = style({
  width: '182px'
});

const menuSpacerClass = style({
  margin: '2px 0',
  border: 0,
  borderTop: '1px solid var(--color-gray-500)'
});

interface SidebarMenuProps extends React.HTMLProps<HTMLDivElement> {
}

class SidebarMenu extends React.Component<SidebarMenuProps, {}> {
  constructor (props: SidebarMenuProps) {
    super(props);
  }

  public render() {
    return (
      <Dropdown className={sidebarMenuClass}>
        <DropdownTrigger className={sidebarTriggerClass}>
          <Icon.ChevronDown size={24} />
        </DropdownTrigger>
        <DropdownOptions popoutDirection="bottom" className={sidebarOptionsClass}>
          <DropdownOption><Link to="/">Home</Link></DropdownOption>
          <DropdownOption><Link to="/projects">Projects</Link></DropdownOption>
          <DropdownOption>Option3</DropdownOption>
          <div className={menuSpacerClass} />
          <DropdownOption>New Project...</DropdownOption>
        </DropdownOptions>
      </Dropdown>
    );
  }
}

export default SidebarMenu;
