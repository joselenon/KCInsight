import React from 'react';
import styled from 'styled-components';

const SimpleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  p {
    color: var(--color-gray);
  }
`;

const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  p {
    color: var(--color-gray);
  }
`;

export default function Simple() {
  return (
    <SimpleContainer>
      <FAQWrapper>
        <h5>Modo Simples</h5>
        <p>
          <span style={{ fontWeight: 500 }}>Resolva questões rapidamente com feedback imediato.</span>
        </p>

        <p>
          Ao selecionar uma alternativa, você pode checar na hora se acertou ou errou, junto com a explicação da
          resposta correta. Ideal para revisões pontuais ou estudo leve, sem pressão de tempo.
        </p>
      </FAQWrapper>
    </SimpleContainer>
  );
}
