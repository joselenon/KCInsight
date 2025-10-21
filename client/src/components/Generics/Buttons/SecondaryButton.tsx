import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { CommonStyles } from './CommonStyles';
import LoadingGif from '../LoadingGif';

const ButtonStyle = styled.button<{
  $color?: string;
  $bgColor?: string;
}>`
  ${CommonStyles}

  border: .25rem solid ${({ $color }) => $color};
  background-color: ${({ $bgColor }) => $bgColor};

  span {
    color: ${({ $color }) => $color};
  }

  &:hover {
    background-color: ${({ $color, $bgColor }) => ($color ? $color : $bgColor)};

    span {
      color: ${({ $bgColor }) => $bgColor};
    }
    filter: brightness(0.9);
  }

  svg {
    color: var(--color-white);
    vertical-align: middle;
    display: inline-block;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export interface IButton {
  children?: React.ReactElement;
  element?: React.ReactElement;
  label?: string;
  color: string;
  bgColor: string;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  customStyle?: React.CSSProperties;
  showLoadingOnDisabled?: boolean;
}

export default function SecondaryButton({
  children,
  element,
  label,
  color,
  bgColor,
  attributes,
  customStyle,
  showLoadingOnDisabled,
}: IButton) {
  return (
    <ButtonStyle
      type={attributes?.type ? attributes.type : 'button'}
      {...attributes}
      style={customStyle}
      $color={color}
      $bgColor={bgColor}
    >
      <Container>
        {attributes?.disabled && showLoadingOnDisabled ? (
          <LoadingGif />
        ) : (
          <>
            {children}
            {element}
            <span>{label}</span>
          </>
        )}
      </Container>
    </ButtonStyle>
  );
}
