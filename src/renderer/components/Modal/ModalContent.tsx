import * as React from 'react';
import { style } from 'typestyle';

const modalHeaderClass = style({
  padding: 'var(--spacer)'
});

interface ModalContentProps {
}

const ModalContent: React.SFC<ModalContentProps> = ({ children }) => (
  <div className={modalHeaderClass}>
    {children}
  </div>
);

export default ModalContent;
