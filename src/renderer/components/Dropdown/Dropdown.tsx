import * as React from 'react';
import { style } from 'typestyle';
import * as classnames from 'classnames';

const dropdownClass = style({
  position: 'relative'
});

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
      isActive: false
    };
  }

  static defaultProps = {
    keepOpenOnSelect: false,
    preferredHorizontal: 'right',
    preferredVertical: 'bottom'
  };

  public render() {
    return (
      <div
        className={classnames(dropdownClass, this.props.className)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Dropdown;
