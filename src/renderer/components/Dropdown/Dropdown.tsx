import * as React from 'react';
import { style } from 'typestyle';
import * as classnames from 'classnames';

const dropdownClass = style({
  position: 'relative'
});

interface DropdownProps extends React.HTMLProps<HTMLDivElement> {
}

class Dropdown extends React.Component<DropdownProps, {}> {
  constructor (props: DropdownProps) {
    super(props);
  }

  public render() {
    return (
      <div className={classnames(dropdownClass, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default Dropdown;
