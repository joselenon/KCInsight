import React, { JSX, useEffect, useState } from 'react';
import styled from 'styled-components';

import useRequireLogin from '@/hooks/useRequireLogin';
import PrimaryButton from './Buttons/PrimaryButton';

const UserMenusContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

interface IUserMenus {
  [key: string]: JSX.Element;
}

export default function DynamicMenu({ menuItems }: { menuItems: { [key: string]: JSX.Element } }) {
  const [activatedMenu, setActivatedMenu] = useState<undefined | keyof IUserMenus>(undefined);

  const { execRequiringLogin, isLogged } = useRequireLogin();

  useEffect(() => {
    if (!isLogged) setActivatedMenu(undefined);
  }, [isLogged]);

  // const userMenus: IUserMenus = { APOSTAS: <BetTransactions />, TRANSAÇÕES: <CashierTransactions /> };
  const menuItemsKeys = Object.keys(menuItems);

  return (
    <UserMenusContainer>
      <ButtonsContainer>
        {menuItemsKeys.map((key, i) => (
          <PrimaryButton
            key={i}
            color={activatedMenu === key ? 'var(--color-orange)' : 'var(--color-1)'}
            label={key}
            attributes={{
              onClick: () => {
                execRequiringLogin(() => setActivatedMenu(key));
              },
            }}
          />
        ))}
      </ButtonsContainer>

      {activatedMenu && menuItems[activatedMenu]}
    </UserMenusContainer>
  );
}
