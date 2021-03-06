/* tslint:disable:max-line-length */

import * as React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  .foreground {
    fill: var(--color-white)
  }

  .background {
    var(--brand-color-wine-red)
  }
`;

interface RareInkIconProps {
  kind?: string;
}

const RareInkIcon: React.SFC<RareInkIconProps> = ({ kind }) => (
  <StyledIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
    <path className="background" d="M432,480H48c-26.5,0-48-21.5-48-48V48C0,21.5,21.5,0,48,0h384c26.5,0,48,21.5,48,48v384C480,458.5,458.5,480,432,480z"/>
    <path className="foreground" d="M377.5,312.3c-52,30.6-99.4,70.7-137.5,107.6c-38.1-36.9-85.5-77-137.5-107.6c0,0,105.6-166.3,131.7-252.1l0,198.8c0,14-4.1,28-12.7,39.1c-3,3.9-4.8,8.8-4.8,14.2c0,12.9,10.4,23.3,23.3,23.3s23.3-10.4,23.3-23.3c0-5.4-1.8-10.3-4.8-14.2c-8.6-11.1-12.7-25-12.7-39.1l0-198.8C271.9,145.9,377.5,312.3,377.5,312.3z"/>
  </StyledIcon>
);

export default RareInkIcon;
