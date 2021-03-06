import { Styles as ReactModalStyles } from 'react-modal';

export const modalStyles: ReactModalStyles = {
  overlay: {
    zIndex: 9999,
  },
  content: {
    padding: 0,
    border: '1px solid var(--color-gray-500)',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .2)',
    zIndex: 10000,
  },
};
