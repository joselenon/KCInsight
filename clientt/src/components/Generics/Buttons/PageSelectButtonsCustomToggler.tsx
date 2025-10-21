import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const PageSelectButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

interface IPageSelectButtons {
  hasPrevious: boolean;
  hasMore: boolean;
  toggleNext: () => void;
  togglePrevious: () => void;
  maxVisiblePages?: number; // Número máximo de páginas visíveis por vez
}

export default function PageSelectButtonsCustomToggler({
  hasPrevious,
  hasMore,
  toggleNext,
  togglePrevious,
}: IPageSelectButtons) {
  return (
    <PageSelectButtonsContainer>
      <PrimaryButton
        color={hasPrevious ? 'var(--color-gray)' : 'var(--color-grafitti)'}
        label={'Ant'}
        attributes={{
          onClick: togglePrevious,
          id: 'return',
          disabled: !hasPrevious,
        }}
      />

      <PrimaryButton
        color={hasMore ? 'var(--color-gray)' : 'var(--color-grafitti)'}
        label="Prox"
        attributes={{
          onClick: toggleNext,
          id: 'next',
          disabled: !hasMore,
        }}
      />
    </PageSelectButtonsContainer>
  );
}
