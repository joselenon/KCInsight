import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { CommonStyles } from './CommonStyles';
import LoadingGif from '../LoadingGif';

const ButtonStyle = styled.button<{
  $color?: string;
  $textColor?: string;
  $disabled?: boolean;
  $showLoading?: boolean;
}>`
  ${CommonStyles}

  background: ${({ $color }) => ($color ? $color : 'var(--color-2)')};
  position: relative;
  overflow: hidden;

  svg {
    vertical-align: middle;
    display: inline-block;
  }

  svg,
  img {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }

  span {
    color: ${({ $textColor }) => ($textColor ? `${$textColor} !important` : 'var(--color-white) !important')};
  }
`;

const Container = styled.div<{ $invisible?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: ${({ $invisible }) => ($invisible ? 0 : 1)};
  transition: opacity 0.3s ease;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export interface IButton {
  children?: React.ReactElement;
  element?: React.ReactElement;
  label?: string;
  color?: string;
  textColor?: string;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  customStyle?: React.CSSProperties;
  showLoadingOnDisabled?: boolean;
  loadingColor?: string;
}

export default function PrimaryButton({
  children,
  element,
  label,
  color,
  textColor,
  attributes,
  customStyle,
  showLoadingOnDisabled,
  loadingColor,
}: IButton) {
  const isLoading = attributes?.disabled && showLoadingOnDisabled;

  return (
    <ButtonStyle
      type={attributes?.type ?? 'button'}
      {...attributes}
      style={customStyle}
      $color={color}
      $textColor={textColor}
      $disabled={attributes?.disabled}
      $showLoading={showLoadingOnDisabled}
    >
      {isLoading && (
        <LoadingWrapper>
          <LoadingGif color={loadingColor} />
        </LoadingWrapper>
      )}

      <Container $invisible={isLoading}>
        {children}
        {element}
        {label && <span>{label}</span>}
      </Container>
    </ButtonStyle>
  );
}
