import * as React from 'react';
import styled from 'styled-components';

interface DropdownTriggerProps {
  icon?: string;
  className?: string;
}

class DropdownTrigger extends React.Component<DropdownTriggerProps, {}> {
  constructor (props: DropdownTriggerProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default styled(DropdownTrigger)`
  display: block;
`;
