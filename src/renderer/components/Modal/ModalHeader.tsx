import * as React from 'react';
import styled from 'styled-components';

const { X } = require('react-feather');

const ModalHeaderRoot = styled.div`
  display: flex;
  flex-direction: row;
  height: 43px;
  padding: 0 var(--spacer);
  background-color: var(--color-gray-200);
  border-bottom: 1px solid var(--color-gray-500);

  div {
    height: 100%;
  }
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  h3 {
    margin: 0;
    font-weight: 400;
  }
`;

const ModalCloseButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface ModalHeaderProps {
  title: string;
  onCloseButtonClick: React.MouseEventHandler<any>;
}

const ModalHeader: React.SFC<ModalHeaderProps> = ({ title, onCloseButtonClick }) => (
  <ModalHeaderRoot>
    <ModalTitle><h3>{title}</h3></ModalTitle>
    <ModalCloseButton onClick={onCloseButtonClick}><X size="24" /></ModalCloseButton>
  </ModalHeaderRoot>
);

export default ModalHeader;
