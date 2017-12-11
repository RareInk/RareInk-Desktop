import * as React from 'react';
import { style } from 'typestyle';
import * as classnames from 'classnames';

const dropdownOptionClass = style({
  display: 'block',
  padding: '6px 12px',
  cursor: 'pointer',
  color: 'inherit',

  $nest: {
    '&:hover, &:focus': {
      color: 'var(--color-blue)',
      backgroundColor: 'var(--color-gray-100)',
      textDecoration: 'none',
    },
  },
});

interface DropdownOptionProps {
  className?: any;
  onClick?: () => void;
}

class DropdownOption extends React.Component<DropdownOptionProps, {}> {
  constructor (props: DropdownOptionProps) {
    super(props);
  }

  public render() {
    const { className, onClick } = this.props;
    return (
      <a
        className={classnames(dropdownOptionClass, className)}
        onClick={onClick}
      >
        {this.props.children}
      </a>
    );
  }
}

export default DropdownOption;
