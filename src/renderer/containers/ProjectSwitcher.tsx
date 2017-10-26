import * as React from 'react';

class ProjectSwitcherContainer extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default ProjectSwitcherContainer;
