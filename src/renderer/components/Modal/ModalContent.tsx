import * as React from 'react';
import styled from 'styled-components';

interface ModalContentProps {
  className?: string;
}

const ModalContent: React.SFC<ModalContentProps> = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

export default styled(ModalContent)`
  padding: var(--spacer);
`;
