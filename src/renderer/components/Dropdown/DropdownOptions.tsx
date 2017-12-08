import * as React from 'react';
import { style } from 'typestyle';
import * as classnames from 'classnames';

const dropdownOptionsClass = style({
  backgroundColor: 'var(--color-white)',
  color: 'var(--brand-color-ink-black)',
  border: '1px solid var(--color-gray-500)',
  borderRadius: '3px',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .2)'
});

interface DropdownOptionsProps extends React.HTMLProps<HTMLDivElement> {
  icon?: string;
  popoutDirection?: 'top' | 'bottom';
  popoutSize?: number;
}

class DropdownOptions extends React.Component<DropdownOptionsProps, {}> {
  constructor (props: DropdownOptionsProps) {
    super(props);
  }

  public render() {
    const { className } = this.props;
    return (
      <div
        className={classnames(
          dropdownOptionsClass,
          className
        )}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DropdownOptions;
