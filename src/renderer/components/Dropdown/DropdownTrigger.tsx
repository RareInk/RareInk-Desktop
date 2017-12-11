import * as React from 'react';
import { style } from 'typestyle';
import * as classnames from 'classnames';

const dropdownTriggerClass = style({
  display: 'block',
});

interface DropdownTriggerProps extends React.HTMLProps<HTMLDivElement> {
  icon?: string;
}

class DropdownTrigger extends React.Component<DropdownTriggerProps, {}> {
  constructor (props: DropdownTriggerProps) {
    super(props);
  }

  public render() {
    return (
      <div className={classnames(dropdownTriggerClass, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default DropdownTrigger;
