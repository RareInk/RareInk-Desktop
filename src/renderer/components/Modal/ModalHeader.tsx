import * as React from 'react';
import { style } from 'typestyle';

const { X } = require('react-feather');

const modalHeaderClass = style({
  display: 'flex',
  flexDirection: 'row',
  height: '43px',
  padding: '0 var(--spacer)',
  backgroundColor: 'var(--color-grey-100)',
  borderBottom: '1px solid var(--color-gray-500)',

  $nest: {
    '& div': {
      height: '100%',
    },
  },
});

const modalTitleClass = style({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,

  $nest: {
    '& h3': {
      margin: 0,
      fontWeight: 400,
    },
  },
});

const modalCloseButtonClass = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

interface ModalHeaderProps {
  title: string;
  onCloseButtonClick: React.MouseEventHandler<any>;
}

const ModalHeader: React.SFC<ModalHeaderProps> = ({ title, onCloseButtonClick }) => (
  <div className={modalHeaderClass}>
    <div className={modalTitleClass}><h3>{title}</h3></div>
    <div className={modalCloseButtonClass} onClick={onCloseButtonClick}><X size="24" /></div>
  </div>
);

export default ModalHeader;
