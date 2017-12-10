import * as React from 'react';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

const sidebarOptionsClass = style({
  boxShadow: 'none',
  border: 0,
  borderRadius: 0,
  borderBottom: '1px solid var(--color-gray-400)'
});

const sidebarOptionClass = style({
  display: 'block',
  padding: '6px 12px',
  cursor: 'pointer',
  color: 'inherit',

  $nest: {
    '&:hover, &:focus': {
      color: 'var(--color-blue)',
      backgroundColor: 'var(--color-gray-100)',
      textDecoration: 'none'
    }
  }
});

const menuSpacerClass = style({
  margin: '2px 0',
  border: 0,
  borderTop: '1px solid var(--color-gray-400)'
});

interface SidebarMenuProps extends React.HTMLProps<HTMLDivElement> {
  isVisible: boolean;
}

const SidebarMenu: React.SFC<SidebarMenuProps> = ({ isVisible }) => {
  return (
    <React.Fragment>
      {isVisible
        ? <div className={classnames(sidebarOptionsClass)}>
          <Link className={sidebarOptionClass} to="/">Home</Link>
          <Link className={sidebarOptionClass} to="/projects">Projects</Link>
          <div className={sidebarOptionClass}>Option3</div>
          <div className={menuSpacerClass} />
          <div className={sidebarOptionClass}>More Projects...</div>
          <div className={sidebarOptionClass}>Create New Project...</div>
        </div>
        : ''
      }
    </React.Fragment>
  );
};

export default SidebarMenu;
