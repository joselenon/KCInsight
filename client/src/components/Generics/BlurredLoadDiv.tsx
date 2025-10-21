import React, { JSX } from 'react';
import { styled } from 'styled-components';

const BlurredLoadDivContainer = styled.div<{ $isLoading: boolean }>`
  transition: filter 0.5s;

  filter: ${({ $isLoading }) => ($isLoading ? 'blur(3px)' : 'none')};
`;

interface IBlurredLoadDiv {
  children: JSX.Element;
  isLoading: boolean;
}

export default function BlurredLoadDiv({ children, isLoading }: IBlurredLoadDiv) {
  return <BlurredLoadDivContainer $isLoading={isLoading}>{children}</BlurredLoadDivContainer>;
}
