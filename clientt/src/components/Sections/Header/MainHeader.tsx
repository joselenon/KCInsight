import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { menuItems } from '.';
import AppLogo from '@/components/Generics/AppLogo';
import { useSideBarContext } from '@/contexts/SideBarContext';
import PrimaryButton from '@/components/Generics/Buttons/PrimaryButton';
import IconButton from '@/components/Generics/Buttons/IconButton';

const scrollbarWidth = 10;

const HeaderContainer = styled.div<{
  $sideBarWidths: { left: number; right: number };
}>`
  user-select: none;
  width: 100%;
  height: var(--header-height);
  top: 0;
  left: 0;
  position: fixed;

  padding-left: ${({ $sideBarWidths }) => `${$sideBarWidths.left}px`};
  padding-right: ${({ $sideBarWidths }) => `calc(${$sideBarWidths.right}px + ${scrollbarWidth}px)`};

  z-index: 5;
  background: var(--color-2);
  transition: box-shadow 0.3s ease;
  backdrop-filter: blur(8px);
`;

const HeaderMenusContainer = styled.div`
  max-width: var(--page-mx-width);
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  h4 {
    white-space: nowrap;
    color: var(--color-3);
  }

  @media (max-width: 1000px) {
    padding: 0 0.75rem;
  }
`;

const MenuItemsContainer = styled.div`
  height: 100%;

  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
  justify-content: space-between;

  text-transform: uppercase;
  transition: all 0.25s ease-in-out;
`;

const RightContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

const HeaderMenuItem = styled.div<{ $isActive: boolean }>`
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: 100%;
  align-items: center;
  white-space: nowrap;
  transition: all 0.15s;
  box-shadow: ${({ $isActive }) => ($isActive ? ' 0px 2px 0px var(--color-red)' : 'none')};

  a {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  span {
    text-transform: none;
    font-weight: 600;
    color: ${({ $isActive }) => ($isActive ? 'var(--color-white)' : 'var(--color-gray)')};
    font-size: 14px;
  }

  &:hover {
    box-shadow: 0px 2px 0px var(--color-red);

    span {
      color: var(--color-white);
    }
    h4 {
      color: var(--color-1);
    }
    img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7489%) hue-rotate(341deg) brightness(102%)
        contrast(101%);
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    min-width: 18px;
    min-height: 18px;
    width: 18px;
    height: 18px;
  }
`;

const LittleDetailWrap = styled.div<{ $sideBarProps: { width: number; side: 'left' | 'right' } }>`
  position: absolute;
  bottom: -20px;
  left: ${({ $sideBarProps }) => `${$sideBarProps.width}px`};
  background-color: var(--color-2);

  display: ${({ $sideBarProps }) => ($sideBarProps.width > 0 ? 'block' : 'none')};
`;

const LittleDetail = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--color-background);
  border-radius: var(--br-md) 0 0 0;
`;

export const sandwichIcon = (
  <svg width={16} fill="var(--color-3) !important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
  </svg>
);

const MainHeader = () => {
  const { sideBars, toggleSidebar } = useSideBarContext();

  const leftSideBarWidth = sideBars.left.width;
  const rightSideBarWidth = sideBars.right.width;

  const location = useLocation();

  return (
    <HeaderContainer $sideBarWidths={{ left: leftSideBarWidth, right: rightSideBarWidth }}>
      <HeaderMenusContainer>
        <LogoWrapper>
          {!sideBars.left.show && (
            <IconButton customStyle={{ width: 'fit-content' }} attributes={{ onClick: () => toggleSidebar('left') }}>
              {sandwichIcon}
            </IconButton>
          )}

          <AppLogo />
        </LogoWrapper>

        <RightContainer>
          <MenuItemsContainer>
            {Object.entries(menuItems).map(([item, { path, icon }], i) => (
              <HeaderMenuItem
                key={i}
                $isActive={location.pathname === path || (location.pathname === '/' && path === '/cassino')}
              >
                <Link to={path}>
                  {icon && icon}
                  <span>{item}</span>
                </Link>
              </HeaderMenuItem>
            ))}
          </MenuItemsContainer>
        </RightContainer>
      </HeaderMenusContainer>
    </HeaderContainer>
  );
};

export default MainHeader;
