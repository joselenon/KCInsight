import React, { JSX } from 'react';
import styled from 'styled-components';

import {
  CommonStyles,
  ErrorContainerCommonStyles,
  ErrorMessageCommonStyles,
  IconContainerCommonStyles,
  WrapperCommonStyles,
} from './CommonStyles';

import { MediumInfoMessage } from '@/styles/GlobalStyles';

const DefaultInputContainer = styled.div<{ $customStyle?: React.CSSProperties }>`
  ${CommonStyles}

  input {
    &::placeholder {
      opacity: 0.5;
      color: white;
    }
  }
`;

const WrapperContainer = styled.div`
  ${WrapperCommonStyles}
`;

const IconContainer = styled.div`
  ${IconContainerCommonStyles}
`;

const ErrorContainer = styled.div`
  ${ErrorContainerCommonStyles}
`;

const ErrorMessage = styled.span`
  ${ErrorMessageCommonStyles}
`;

export interface ICreateDefaultInput {
  id: string;
  label?: string;
  icon?: React.ReactElement;
  options?: React.InputHTMLAttributes<HTMLInputElement>;
  customStyle?: React.CSSProperties;
  errorMessage?: string;
  onChangeFn?: (value: string) => void;
}

export default function NoRHFInput(props: ICreateDefaultInput) {
  const { id, label, icon, options = {}, customStyle, errorMessage, onChangeFn } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFn?.(e.target.value);
    options.onChange?.(e); // mantém compatibilidade com onChange nativo
  };

  return (
    <DefaultInputContainer>
      {label && <span>{label}</span>}

      <WrapperContainer>
        {icon && <IconContainer>{icon}</IconContainer>}

        <label htmlFor={id}>
          <input style={customStyle} id={id} {...options} onChange={handleChange} />
        </label>
      </WrapperContainer>

      {errorMessage && (
        <ErrorContainer>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorContainer>
      )}
    </DefaultInputContainer>
  );
}
