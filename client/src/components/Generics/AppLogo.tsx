import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryButton from './Buttons/PrimaryButton';

const AppLogoContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 30px;
  }

  h5 {
    font-weight: 900;
    color: var(--color-3);
  }
`;

const AppLogo = React.memo(({ resizeble = true }: { resizeble?: boolean }) => {
  return (
    <Link to={'/'}>
      <AppLogoContainer>
        <img src={'LogoPre'} alt="" />
      </AppLogoContainer>
    </Link>
  );
});

export default AppLogo;
