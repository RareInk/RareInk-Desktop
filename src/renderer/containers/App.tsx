import * as React from 'react';

class Layout extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
