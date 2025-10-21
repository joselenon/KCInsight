import React from 'react';
import styled from 'styled-components';

const Spinner = styled.svg<{ $color: string }>`
  animation: rotate 1s linear infinite;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;

  & .path {
    stroke: ${({ $color }) => $color};
    strokelinecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default function LoadingGif({ color }: { color?: string }) {
  return (
    <Spinner $color={color ? color : 'var(--color-1)'} viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
    </Spinner>
  );
}
