import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSideBarContext } from '@/contexts/SideBarContext';
import MobileSideBar from './MobileSideBar';
import LittleDetail from './LittleDetail';

export const SideBarMaxWidth = 849;

const MotionSideBar = styled(motion.div)<{ $side: 'left' | 'right'; $customWidth: string }>`
  position: fixed;
  z-index: 6;
  top: 0;
  bottom: 0;
  ${({ $side }) => ($side === 'left' ? 'left: 0;' : 'right: 0;')}

  width: ${({ $customWidth }) => $customWidth};
  height: 100%;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;

  @media (max-width: ${SideBarMaxWidth}px) {
    display: none;
  }
`;

const Wrapper = styled.div<{ $bgColor?: string }>`
  width: 100%;
  height: 100vh;

  background: ${({ $bgColor }) => ($bgColor ? $bgColor : 'var(--color-2)')};

  overflow-y: auto;
`;

const RelativeWrapper = styled.div`
  position: relative;
`;

export default function SideBar({
  desktopElements,
  mobileElements,
  SIDE,
  customWidth,
  bgColor,
}: {
  desktopElements: React.ReactNode;
  mobileElements: React.ReactNode;
  SIDE: 'left' | 'right';
  customWidth: { width: string; minWidth: string; maxWidth: string };
  bgColor?: string;
}) {
  const { sideBars, refs, SideBarMinWidth } = useSideBarContext();
  const thisSidebar = sideBars[SIDE];
  const show = thisSidebar.show;

  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= SideBarMinWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= SideBarMinWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isDesktop && (
        <RelativeWrapper>
          <MotionSideBar
            ref={refs[SIDE]} // <- agora controlado pelo contexto
            $side={SIDE}
            initial={{ width: 0 }}
            animate={{
              minWidth: show ? (customWidth.minWidth ?? 'var(--sidebar-width)') : 0,
              maxWidth: show ? (customWidth.maxWidth ?? 'var(--sidebar-width)') : 0,
              width: show ? (customWidth.width ?? 'var(--sidebar-width)') : 0,
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            $customWidth={`${customWidth}px`}
          >
            <Wrapper $bgColor={bgColor}>{desktopElements}</Wrapper>

            {show && <LittleDetail SIDE={SIDE} sidebarWidth={customWidth.width} />}
          </MotionSideBar>
        </RelativeWrapper>
      )}

      {!isDesktop && <MobileSideBar SIDE={SIDE}>{mobileElements}</MobileSideBar>}
    </>
  );
}
