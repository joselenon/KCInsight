import { useSideBarContext } from '@/contexts/SideBarContext';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const SideBarMaxWidth = 899;
export const SideBarMinWidth = 900;

const MobileSideBarContainer = styled.div<{ $show: boolean; $side: 'left' | 'right' }>`
  position: fixed;
  z-index: 6;
  top: 0;
  ${({ $side }) => ($side === 'left' ? 'left: 0;' : 'right: 0;')}

  width: 100vw;
  height: 100%;

  transform: ${({ $show, $side }) =>
    $show ? 'translateX(0)' : $side === 'left' ? 'translateX(-100%)' : 'translateX(100%)'};

  transition: transform 0.2s ease-in-out;

  display: flex;
  flex-direction: column;

  pointer-events: none;
  margin-top: var(--header-height);

  @media (min-width: ${SideBarMinWidth}px) {
    display: none;
  }
`;

const HeaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--header-height);
  z-index: 3;
  background: transparent;
  pointer-events: auto;

  @media (min-width: ${SideBarMinWidth}px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background: var(--color-2);
  border-top: 2px solid var(--color-dark2);
  pointer-events: auto;

  height: calc(100vh - var(--header-height));
  overflow-y: auto;
`;

export default function MobileSideBar({ children, SIDE }: { children: React.ReactNode; SIDE: 'left' | 'right' }) {
  const { toggleSidebar, sideBars } = useSideBarContext();
  const thisSidebar = sideBars[SIDE];

  return (
    <>
      {thisSidebar.show && <HeaderOverlay onClick={() => toggleSidebar(SIDE)} />}
      <MobileSideBarContainer $side={SIDE} $show={thisSidebar.show}>
        <Wrapper>{children}</Wrapper>
      </MobileSideBarContainer>
    </>
  );
}
