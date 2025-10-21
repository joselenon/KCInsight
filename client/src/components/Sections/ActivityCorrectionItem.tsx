import PrimaryButton from '@/components/Generics/Buttons/PrimaryButton';
import { PlanUsageChecker } from '@/services/PlanUsageChecker.service';
import React from 'react';
import styled from 'styled-components';

import dinoCircle from '@/assets/images/logos/dino-circle.png';

import ReactMarkdown from 'react-markdown';
import MarkdownRenderer from '@/components/MarkdownRenderer';

const BodyWrapper = styled.div<{ $correct: boolean }>`
  position: sticky;

  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  border-radius: var(--br-md);

  color: ${({ $correct }) => ($correct ? 'var(--color-2)' : 'var(--color-2)')} !important;

  .explanation {
    font-weight: 400;
    color: ${({ $correct }) => ($correct ? 'var(--color-green)' : 'var(--color-red)')} !important;
  }

  h5 {
    color: var(--color-white);
    font-size: 14px;
  }
`;

const HeaderWrapper = styled.div<{ $correct: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 20px;
    fill: ${({ $correct }) => ($correct ? 'var(--color-green)' : 'var(--color-red)')};
  }

  .title {
    font-size: 14px;
    font-weight: 500;
    color: ${({ $correct }) => ($correct ? 'var(--color-green)' : 'var(--color-red)')};
  }
`;

const TextsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  hr {
    height: 1px;
    background-color: var(--color-2);
    opacity: 0.15;
    border: none;
  }
`;

const correctIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z" />
  </svg>
);

const wrongIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.5 408.8 408.8C399.4 418.1 384.2 418.2 374.9 408.8L319.9 353.8L264.9 408.8C255.5 418.2 240.3 418.2 231 408.8C221.7 399.4 221.6 384.2 231 374.9L286 319.9L231 264.9C221.6 255.5 221.6 240.3 231 231z" />
  </svg>
);

export default function ActivityCorrectionItem({
  correct,
  aiInsights,
}: {
  correct: boolean;
  aiInsights: { summary: string; explanation: string | undefined } | null | undefined;
}) {
  return (
    <BodyWrapper $correct={correct}>
      <HeaderWrapper $correct={correct}>
        {correct ? correctIcon : wrongIcon}
        <span className="title">Análise de resposta</span>
      </HeaderWrapper>

      <TextsWrapper className="markdownTexts">
        {aiInsights && <MarkdownRenderer text={aiInsights.summary} />}

        {aiInsights === undefined && (
          <>
            <h5 style={{ color: 'var(--color-2)' }}>Clique em gerar relatório</h5>

            <PrimaryButton label="Tentar Novamente" color="var(--color-2)" />
          </>
        )}
      </TextsWrapper>
    </BodyWrapper>
  );
}
