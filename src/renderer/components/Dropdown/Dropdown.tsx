import * as React from 'react';
import styled from 'styled-components';

const DropdownRoot = styled.div`
  position: relative;
`;

interface DropdownProps extends React.HTMLProps<HTMLDivElement> {
  keepOpenOnSelect?: boolean;
  preferredHorizontal?: 'left' | 'right';
  preferredVertical?: 'top' | 'bottom';
}

interface DropdownState {
  isActive: boolean;
}

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor (props: DropdownProps) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  static defaultProps = {
    keepOpenOnSelect: false,
    preferredHorizontal: 'right',
    preferredVertical: 'bottom',
  };

  public render() {
    return (
      <DropdownRoot>
        {this.props.children}
      </DropdownRoot>
    );
  }
}

export default Dropdown;
