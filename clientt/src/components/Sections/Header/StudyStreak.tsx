import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import StreakCongratulationsModal from './StreakCongratulationsModal';
import { useTimerContext } from '@/contexts/Timer/TimerContext';
import useStudyStreak from '@/hooks/UserMetrics/useStudyStreak';
import { SVGFire } from '@/assets/EstudinoSVGs';

const slideUpIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const slideUpOut = keyframes`
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const FireWrapper = styled.div`
  flex-shrink: 0;
  height: 40px;

  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: var(--br-sm);
  background: var(--color-light2);

  svg {
    fill: var(--color-orange);
    width: 18px;
    height: 18px;
  }
`;

const NumberWrapper = styled.div`
  position: relative;
  height: 1.2rem;
  width: 1.2rem;
  overflow: hidden;
`;

const Number = styled.span<{
  $variant: 'in' | 'out' | 'static';
}>`
  position: absolute;
  left: 0;

  width: 100%;
  height: 100%;

  font-size: 14px;
  font-weight: 500;
  color: var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.$variant === 'in' &&
    css`
      animation: ${slideUpIn} 0.3s ease forwards;
      transform: translateY(100%);
    `}

  ${(props) =>
    props.$variant === 'out' &&
    css`
      animation: ${slideUpOut} 0.3s ease forwards;
      transform: translateY(0%);
    `}

  ${(props) =>
    props.$variant === 'static' &&
    css`
      transform: translateY(0%);
    `}
`;

export default function StudyStreak() {
  const { data: studyStreak } = useStudyStreak();

  const previousStudyStreak = useRef<number | undefined | null>(studyStreak?.value);
  const [isAnimating, setIsAnimating] = useState(false);
  const [tempPrevious, setTempPrevious] = useState<number | undefined | null>(studyStreak?.value);

  useEffect(() => {
    if (studyStreak !== previousStudyStreak.current) {
      setTempPrevious(previousStudyStreak.current);
      setIsAnimating(true);

      const timer = setTimeout(() => {
        previousStudyStreak.current = studyStreak?.value;
        setIsAnimating(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [studyStreak]);

  return (
    <>
      <FireWrapper>
        {SVGFire}
        <NumberWrapper>
          {isAnimating ? (
            <>
              <Number $variant="out">{tempPrevious}</Number>
              <Number $variant="in">{studyStreak?.value}</Number>
            </>
          ) : (
            <>
              <Number $variant="static">{studyStreak?.value}</Number>
            </>
          )}
        </NumberWrapper>
      </FireWrapper>

      {studyStreak?.value === 10 && <StreakCongratulationsModal />}
    </>
  );
}
