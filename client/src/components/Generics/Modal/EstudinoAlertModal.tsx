import Modal from '@/components/Generics/Modal';
import React from 'react';
import styled from 'styled-components';

import dinosSilhouette from '@/assets/images/sections/alertModal/dinosSilhouette.png';
import PrimaryButton from '../Buttons/PrimaryButton';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: var(--br-md);
`;

const Header = styled.div`
  padding: 0.5rem 1rem;

  h3 {
    color: var(--color-white);
  }
`;

const Body = styled.div<{ $color: string }>`
  background-color: var(--color-background);
  background-image: url(${dinosSilhouette});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  border: 4px solid ${({ $color }) => $color};
  border-radius: var(--br-md);

  text-align: center;

  span {
    color: var(--color-gray);
    font-weight: 500;
  }
`;

const Texts = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-1);
  font-weight: 600;

  .description {
    font-weight: 600;
    color: var(--color-1);
  }
`;

interface IEstudinoModal {
  title: string;
  description: string | React.ReactElement;
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
  xpGained: string | number;
}

export default function EstudinoAlertModal({
  title,
  description,
  children,
  showModal,
  setShowModal,
  color,
  xpGained,
}: IEstudinoModal) {
  return (
    <Modal showModal={showModal} setShowModal={setShowModal} contentMaxWidth={400}>
      <Wrapper>
        <Body $color={color}>
          {children}

          <Texts>
            <span>+{xpGained}xp</span>
            <h3 style={{ color: color }}>{title}</h3>
            <span className="description">{description}</span>
          </Texts>

          <PrimaryButton
            label="Continuar Estudando"
            color={color}
            textColor="var(--color-white)"
            attributes={{ onClick: () => setShowModal(false) }}
          />
        </Body>
      </Wrapper>
    </Modal>
  );
}
