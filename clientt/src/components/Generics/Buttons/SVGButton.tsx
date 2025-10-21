import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { CommonStyles } from './CommonStyles';

const ButtonStyle = styled.button<{
  $svgColor?: string;
  $fillColor?: string;
}>`
  ${CommonStyles}

  padding: 0;
  background: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.1s;

  width: 1rem;
  height: 1rem;

  svg,
  img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ $fillColor }) => ($fillColor ? $fillColor : 'var(--color-2)')};
    color: ${({ $svgColor }) => ($svgColor ? $svgColor : 'var(--color-2)')};
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
  fillColor?: string;
}

export default function SVGButton({ children, attributes, customStyle, svgColor, fillColor }: IButton) {
  return (
    <ButtonStyle
      type={attributes?.type ?? 'button'}
      {...attributes}
      style={customStyle}
      $svgColor={svgColor}
      $fillColor={fillColor}
    >
      {children}
    </ButtonStyle>
  );
}
