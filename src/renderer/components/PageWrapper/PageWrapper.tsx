import * as React from 'react';
import styled, { css } from 'styled-components';

interface PageWrapperProps {
  children?: React.ReactChild;
  className?: string;
  centered?: boolean;
}

const PageWrapper: React.SFC<PageWrapperProps> = ({ className, children }) => (
  <main className={className}>
    {children}
  </main>
);

export default styled(PageWrapper)`
  display: flex;
  width: 100%;
  height: 100%;

  ${(props: PageWrapperProps) => props.centered ? css`
    align-items: center;
    justify-content: center;
  ` : ``}
`;
