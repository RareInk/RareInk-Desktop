import * as React from 'react';
import SidebarHeader from '../components/SidebarHeader/SidebarHeader';
import { style } from 'typestyle';

const rootClass = style({
  display: 'flex',
  flexDirection: 'column',
  borderRight: '1px solid var(--color-gray-400)',

  $nest: {
    [`& .childClass`]: {
      color: 'red'
    }
  }
});

class Sidebar extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <aside className={rootClass}>
        <SidebarHeader projectName="Project Name" />
        <div>
          ProjectsSidebar
        </div>
      </aside>
    );
  }
}

export default Sidebar;
