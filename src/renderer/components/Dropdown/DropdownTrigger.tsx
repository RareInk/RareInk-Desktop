import * as React from 'react';
import styled from 'styled-components';

const Trigger = styled.div`
  display: block;
`;

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
      <Trigger>
        {this.props.children}
      </Trigger>
    );
  }
}

export default DropdownTrigger;
