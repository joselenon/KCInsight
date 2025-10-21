import React, { JSX } from 'react';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import MobileHeader from './MobileHeader';

const HeaderContainer = styled.div`
  position: relative;
`;

const MainHeaderContainer = styled.div``;

const MobileHeaderContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

export interface IHeaderMenuItems {
  [menu: string]: { path: string; icon?: JSX.Element };
}

export const menuItems: IHeaderMenuItems = {};

export default function Header() {
  return (
    <HeaderContainer>
      <MainHeaderContainer>
        <MainHeader />
      </MainHeaderContainer>

      {/* <MobileHeaderContainer>
        <MobileHeader />
      </MobileHeaderContainer> */}
    </HeaderContainer>
  );
}
