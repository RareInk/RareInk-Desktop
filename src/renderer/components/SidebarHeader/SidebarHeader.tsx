import * as React from 'react';
import { style } from 'typestyle';

const rootClass = style({
  padding: 'var(--spacer) var(--spacer-vertical)',
  backgroundColor: 'var(--brand-color-wine-red)',
  color: 'var(--color-white)'
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
        {this.props.projectName}
      </div>
    );
  }
}

export default SidebarHeader;
