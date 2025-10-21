import React, { JSX } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import googleIcon from '@/assets/icons/google_icon.png';
import { IReduxStore } from '@/interfaces/IRedux';
import PrimaryButton from '@/components/Generics/Buttons/PrimaryButton';
import AppLogo from '@/components/Generics/AppLogo';
import { useAuthContext } from '@/contexts/AuthContext';

const HeaderContainer = styled.div`
  user-select: none;

  width: 100%;
  height: var(--header-height);

  top: 0;
  left: 0;

  position: sticky;
  z-index: 10;

  background: var(--color-header);
  transition: box-shadow 0.3s ease;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 0px 2px var(--color-2);
`;

const HeaderMenusContainer = styled.div`
  max-width: var(--page-mx-width);
  width: 100%;
  height: 100%;

  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
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
  width: 100%;

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
  box-shadow: ${({ $isActive }) => ($isActive ? 'inset 0px -2px 0px var(--color-red)' : 'none')};

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
  svg {
    fill: ${({ $isActive }) => ($isActive ? 'var(--color-white)' : 'var(--color-gray)')};
  }
  img {
    filter: ${({ $isActive }) =>
      $isActive
        ? 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7489%) hue-rotate(341deg) brightness(102%) contrast(101%)'
        : 'brightness(0) saturate(100%) invert(71%) sepia(6%) saturate(104%) hue-rotate(202deg) brightness(92%) contrast(88%)'};
  }

  &:hover {
    box-shadow: inset 0px -2px 0px var(--color-red);

    span {
      color: var(--color-white);
    }
    h4 {
      color: var(--color-1);
    }
    svg {
      fill: var(--color-white);
    }
    img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7489%) hue-rotate(341deg) brightness(102%)
        contrast(101%);
    }
  }
`;

const LogoAndIcon = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0;
    svg {
      display: none;
    }
  }
`;

export interface IHeaderMenuItems {
  [menu: string]: { path: string; icon?: JSX.Element };
}

export const menuItems: IHeaderMenuItems = {
  CASSINO: { path: '/cassino', icon: <img src={'cassinoMenuIcon'} /> },
  ESPORTES: { path: '/esportes', icon: <img src={'esportesMenuIcon'} /> },
};

const MobileHeader = () => {
  const userCredentials = useSelector<IReduxStore, IReduxStore['auth']['userCredentials']>(
    (state) => state.auth.userCredentials,
  );
  const location = useLocation();

  const { loginThroughGoogleFn } = useAuthContext();

  const sandwichIcon = (
    <svg width={16} fill="var(--color-gray)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
    </svg>
  );

  return (
    <HeaderContainer>
      <HeaderMenusContainer>
        <AppLogo />

        {userCredentials && (
          <>
            <Link to={`/perfil`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
            </Link>
          </>
        )}

        {!userCredentials && (
          <PrimaryButton
            label="Entrar"
            color="var(--color-2)"
            textColor="var(--color-white)"
            attributes={{
              onClick: loginThroughGoogleFn,
              type: 'submit',
            }}
          >
            <img src={googleIcon} alt="" width={20} />
          </PrimaryButton>
        )}
      </HeaderMenusContainer>
    </HeaderContainer>
  );
};

export default MobileHeader;
