import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { CommonStyles } from './CommonStyles';
import LoadingGif from '../LoadingGif';

const ButtonStyle = styled.button<{
  $disabled?: boolean;
  $showLoading?: boolean;
}>`
  ${CommonStyles}

  background-color: transparent;
  border-radius: unset;

  width: 100%;
  height: 100%;

  padding: 0;
  white-space: normal;

  position: relative;
  overflow: hidden;
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
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  showLoadingOnDisabled?: boolean;
  loadingColor?: string;
}

export default function RawButton({ children, attributes, showLoadingOnDisabled, loadingColor }: IButton) {
  const isLoading = attributes?.disabled && showLoadingOnDisabled;

  return (
    <ButtonStyle
      type={attributes?.type ?? 'button'}
      {...attributes}
      $disabled={attributes?.disabled}
      $showLoading={showLoadingOnDisabled}
    >
      {isLoading && (
        <LoadingWrapper>
          <LoadingGif color={loadingColor} />
        </LoadingWrapper>
      )}

      {children}
    </ButtonStyle>
  );
}
