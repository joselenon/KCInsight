import AppText from '@/components/Generics/AppText';
import EstudinoAlertModal from '@/components/Generics/Modal/EstudinoAlertModal';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 150px;
    border-radius: var(--br-md);
  }
`;

export default function StreakCongratulationsModal() {
  const [showModal, setShowModal] = useState(true);

  return (
    <EstudinoAlertModal
      showModal={showModal}
      setShowModal={setShowModal}
      title="Parabéns!!"
      description={
        <span>
          Hoje se completam 10 dias seguidos de estudo com a <AppText />.
        </span>
      }
      color="var(--color-orange)"
      xpGained={100}
    >
      <Wrapper>
        <img
          src="https://media.giphy.com/media/eBnERaRlS7VpJzbq1j/giphy.gif"
          alt="https://media.giphy.com/media/eBnERaRlS7VpJzbq1j/giphy.gif"
        />
      </Wrapper>
    </EstudinoAlertModal>
  );
}
