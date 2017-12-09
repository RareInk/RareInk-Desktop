import * as React from 'react';
import { style } from 'typestyle';

const modalHeaderClass = style({
  display: 'flex',
  flexDirection: 'row',
  padding: 'var(--spacer)',
  backgroundColor: 'var(--color-grey-100)',
  borderBottom: '1px solid var(--color-gray-500)'
});

interface ModalHeaderProps {
  title: string;
  onCloseButtonClick: () => any;
}

const ModalHeader: React.SFC<ModalHeaderProps> = ({ title, onCloseButtonClick }) => (
  <div className={modalHeaderClass}>
    {title}
    <button onClick={onCloseButtonClick}>Close</button>
  </div>
);

export default ModalHeader;
