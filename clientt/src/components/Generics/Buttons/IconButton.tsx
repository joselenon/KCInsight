import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { CommonStyles } from './CommonStyles';

const ButtonStyle = styled.button<{
  $svgColor?: string;
  $svgSize?: string;
}>`
  ${CommonStyles}

  height: var(--elements-height);
  padding: 0;
  background: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.1s;

  svg,
  img {
    flex-shrink: 0;
    width: ${({ $svgSize }) => $svgSize || '1rem'};
    height: ${({ $svgSize }) => $svgSize || '1rem'};
  }

  svg {
    fill: ${({ $svgColor }) => ($svgColor ? $svgColor : 'var(--color-white)')};
  }

  &:hover {
    filter: none;
  }

  &:active {
    filter: none;
    transform: translateY(1px);
  }

  &:disabled {
    cursor: default;
    filter: brightness(0.6);
  }
`;

export interface IButton {
  children?: React.ReactElement;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  customStyle?: React.CSSProperties;
  svgColor?: string;
  svgSize?: string;
}

export default function IconButton({ children, attributes, customStyle, svgColor, svgSize }: IButton) {
  return (
    <ButtonStyle
      type={attributes?.type ?? 'button'}
      {...attributes}
      style={customStyle}
      $svgColor={svgColor}
      $svgSize={svgSize}
    >
      {children}
    </ButtonStyle>
  );
}
