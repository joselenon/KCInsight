import PrimaryButton from '@/components/Generics/Buttons/PrimaryButton';
import React from 'react';
import styled from 'styled-components';

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const BoxesWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-gray-light);
  border-radius: var(--br-md);
  text-align: center;

  span.value {
    font-weight: 600;
    font-size: 18px;
    color: var(--color-1);

    width: 100%;
    padding: 0.5rem 0;
    background: var(--color-gray4);
    border-radius: var(--br-md);
  }

  span.label {
    font-size: 13px;
    color: var(--color-gray-dark);
    margin-top: 0.25rem;
  }
`;

const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  p {
    color: var(--color-gray);
  }
`;

export default function Session() {
  const total = 35;
  const correct = 27;
  const wrong = total - correct;
  const avgTimePerQuestionSec = 220; // Exemplo: 3m40s por questão

  const freq = Math.round((correct / total) * 100);
  const minutes = Math.floor(avgTimePerQuestionSec / 60);
  const seconds = avgTimePerQuestionSec % 60;

  return (
    <SessionContainer>
      <FAQWrapper>
        <h5>Modo Sessão (Simulado)</h5>

        <p>
          <span style={{ fontWeight: 500 }}>Simule uma bateria real de questões com tempo e desempenho final.</span>
        </p>

        <p>
          Ao iniciar uma sessão, um cronômetro será ativado e suas respostas serão registradas sem revelar o gabarito
          imediatamente.
        </p>

        <p>
          Ao encerrar a sessão, você verá um resumo com acertos, erros, frequência de acertos e tempo médio por questão.
          Perfeito para treinos focados, desafios ou preparação para provas.
        </p>
      </FAQWrapper>

      <BoxesWrapper>
        <StatBox>
          <span className="label">Respondidas</span>
          <span className="value">{total}</span>
        </StatBox>
        <StatBox>
          <span className="label">Acertos</span>
          <span className="value">{correct}</span>
        </StatBox>
        <StatBox>
          <span className="label">Erros</span>
          <span className="value">{wrong}</span>
        </StatBox>
        <StatBox>
          <span className="label">Frequência</span>
          <span className="value">{freq}%</span>
        </StatBox>
        <StatBox>
          <span className="label">Tempo/questão</span>
          <span className="value">
            {minutes}m {seconds}s
          </span>
        </StatBox>
      </BoxesWrapper>

      <PrimaryButton label="Iniciar" />
    </SessionContainer>
  );
}
