import { IEstudinoActivity } from '@/interfaces/IActivity';
import React, { useState } from 'react';
import styled from 'styled-components';
import { LuScissors } from 'react-icons/lu';
import IconButton from '@/components/Generics/Buttons/IconButton';
import { DISCIPLINE_COLOR_FROM_SLUG } from '@/data/DISCIPLINE_COLOR_FROM_SLUG';
import DOMPurify from 'dompurify';

const AlternativesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const AlternativeItem = styled.div<{ $isMarked: boolean; $isCut: boolean }>`
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  padding: 0.25rem 0.5rem;

  background-color: ${({ $isMarked }) => ($isMarked ? 'var(--color-gray4)' : 'none')};
  border-radius: var(--br-md);

  opacity: ${({ $isCut }) => ($isCut ? 0.5 : 1)};

  &:hover {
    background-color: var(--color-gray5);
  }
`;

const AlternativeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span,
  p,
  div {
    font-size: 15px;
  }

  .alternativeContentWrapperInner {
    position: relative;
    width: fit-content;
    display: inline-block;

    p {
      margin: 0;
    }

    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }

  .correctAlternative {
    font-weight: 500;
    color: var(--color-green);
  }

  .wrongLetter {
    font-weight: 500;
    color: var(--color-red);
  }
`;

const AlternativeCircle = styled.div<{
  $disciplineColor: string;
  $isMarked: boolean;
  $isCorrect?: boolean;
  $isWrong?: boolean;
}>`
  flex-shrink: 0;

  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ $isCorrect, $isWrong, $isMarked, $disciplineColor }) => {
    if ($isCorrect) return 'var(--color-green)';
    if ($isWrong) return 'var(--color-red)';
    return $isMarked ? $disciplineColor : 'transparent';
  }};

  border: 2px solid
    ${({ $disciplineColor, $isCorrect, $isWrong }) => {
      if ($isWrong) return 'none';
      if ($isCorrect) return 'none';
      return $disciplineColor;
    }};
  border-radius: 100%;

  transition: all 0.2s;

  span {
    color: ${({ $disciplineColor, $isCorrect, $isWrong, $isMarked }) => {
      if ($isCorrect || $isWrong) return 'var(--color-white)';
      return $isMarked ? 'var(--color-white)' : $disciplineColor;
    }};
    font-size: 14px;
    font-weight: 500;
  }
`;

interface IAlternatives {
  disciplineSlug: string;
  alternatives: IEstudinoActivity['alternatives'];
  correctAlternative: string | undefined;
  markedLetter: string | null | undefined;
  toggleMarkAlternative: (alternativeLetter: IEstudinoActivity['correctAlternative']) => void;
}

export default function Alternatives({
  disciplineSlug,
  alternatives,
  markedLetter,
  correctAlternative,
  toggleMarkAlternative,
}: IAlternatives) {
  const [cutAlternatives, setCutAlternatives] = useState<('A' | 'B' | 'C' | 'D' | 'E')[]>([]);
  const disciplineColor = DISCIPLINE_COLOR_FROM_SLUG[disciplineSlug];

  const toggleScissor = (alternative: 'A' | 'B' | 'C' | 'D' | 'E') => {
    const isCut = cutAlternatives.includes(alternative);
    if (isCut) {
      setCutAlternatives((prev) => prev.filter((_alt) => _alt !== alternative));
    }

    if (!isCut) {
      setCutAlternatives((prev) => [...prev, alternative]);
    }
  };

  return (
    <AlternativesWrapper>
      {alternatives.map((alternative, index) => {
        const isCut = cutAlternatives.includes(alternative.label);

        const isMarked = markedLetter === alternative.label;
        const isCorrect = correctAlternative && correctAlternative === alternative.label;
        const isWrong = correctAlternative && isMarked && !isCorrect;

        return (
          <AlternativeItem
            key={index}
            onClick={() => toggleMarkAlternative(alternative.label)}
            $isMarked={isMarked}
            $isCut={isCut}
          >
            <IconButton
              attributes={{
                onClick: (e) => {
                  e.stopPropagation();
                  toggleScissor(alternative.label);
                },
              }}
              customStyle={{ padding: 0, width: 'fit-content' }}
            >
              <LuScissors />
            </IconButton>

            <AlternativeCircle
              $disciplineColor={disciplineColor}
              $isMarked={!!isMarked}
              $isCorrect={!!isCorrect}
              $isWrong={!!isWrong}
            >
              <span>{alternative.label}</span>
            </AlternativeCircle>

            <div></div>

            <AlternativeContentWrapper>
              <div className="alternativeContentWrapperInner">
                {isCut && (
                  <s>
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(alternative.text) }} />
                  </s>
                )}

                {!isCut && <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(alternative.text) }} />}
              </div>

              {correctAlternative && isCorrect && !isMarked && <span className="correctAlternative">Correta</span>}
              {correctAlternative && isCorrect && isMarked && (
                <span className="correctAlternative">Correta/Marcada</span>
              )}
              {correctAlternative && isWrong && <span className="wrongLetter">Marcada</span>}
            </AlternativeContentWrapper>
          </AlternativeItem>
        );
      })}
    </AlternativesWrapper>
  );
}
