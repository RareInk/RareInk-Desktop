import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  id?: string;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  kind: 'default' | 'primary' | 'success' | 'danger' | 'info' | 'warning' | 'link';
  size?: 'small' | 'normal' | 'large';
  onClick?: React.MouseEventHandler<any>;
}

class Button extends React.PureComponent<ButtonProps, {}> {
  public render() {
    const { id, className, type, children } = this.props;

    return (
      <button
        id={id}
        className={className}
        type={type || 'button'}
        onClick={this.props.onClick}
      >
        {children}
      </button>
    );
  }
}

export default styled(Button)`
  display: inline-block;
  border-radius: 3px;
  padding: 0.25rem 1rem;
  margin: 0;
  background: transparent;
  color: var(--brand-color-wine-red);
  border: 2px solid var(--brand-color-wine-red);
`;
