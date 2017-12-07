import * as React from 'react';
import { style } from 'typestyle';
import * as classnames from 'classnames';

const dropdownOptionClass = style({
  padding: '6px 12px',
  cursor: 'pointer',

  $nest: {
    '&:hover, &:focus': {
      color: 'var(--color-blue)',
      backgroundColor: 'var(--color-gray-100)'
    }
  }
});

interface DropdownOptionProps extends React.HTMLProps<HTMLDivElement> {
  icon?: string;
}

class DropdownOption extends React.Component<DropdownOptionProps, {}> {
  constructor (props: DropdownOptionProps) {
    super(props);
  }

  public render() {
    return (
      <div className={classnames(dropdownOptionClass, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default DropdownOption;
