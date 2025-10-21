import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div<{ $isOpen: boolean; $color?: string }>`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  transform: rotate(${(props) => (props.$isOpen ? '0deg' : '-90deg')});
  width: 1rem;
  height: 1rem;

  svg {
    width: 100%;
    height: 100%;

    fill: ${({ $color }) => ($color ? $color : 'var(--color-2)')};

    path {
      fill: ${({ $color }) => ($color ? $color : 'var(--color-2)')};
    }
  }
`;

const DownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
  </svg>
);

type AnimatedArrowsProps = {
  isOpen: boolean;
  color?: string;
  className?: string;
};

export default function AnimatedArrows({ isOpen, className, color }: AnimatedArrowsProps) {
  return (
    <IconWrapper $isOpen={isOpen} className={className} $color={color}>
      <DownIcon />
    </IconWrapper>
  );
}
