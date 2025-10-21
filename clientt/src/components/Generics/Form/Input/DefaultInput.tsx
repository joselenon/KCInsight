import React, { JSX, useState } from 'react';

import styled from 'styled-components';
import {
  CommonStyles,
  ErrorContainerCommonStyles,
  ErrorMessageCommonStyles,
  IconContainerCommonStyles,
  WrapperCommonStyles,
} from './CommonStyles';

import { FieldValues, UseFormGetValues, UseFormReturn } from 'react-hook-form';
import { MediumInfoMessage } from '@/styles/GlobalStyles';

const DefaultInputContainer = styled.div<{ $customStyle?: React.CSSProperties }>`
  ${CommonStyles}

  input {
    &::placeholder {
      opacity: 0.5;
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
  icon?: JSX.Element;
  rhfConfig: UseFormReturn<any>;
  validationFn: (value: any, getValues: UseFormGetValues<any>) => { valid: boolean; errorMsg: string };
  options: React.InputHTMLAttributes<HTMLInputElement>;
  customStyle?: React.CSSProperties;
}

export default function DefaultInput(props: ICreateDefaultInput) {
  const { id, label, icon, options, rhfConfig, validationFn, customStyle } = props;

  const {
    register,
    formState: { errors },
    getValues,
  } = rhfConfig;

  const [validationValue, setValidationValue] = useState({
    valid: false,
    errorMsg: '',
  });

  const validation = (value: any) => {
    const validate = validationFn(value, getValues);
    setValidationValue(validate);
    return validate;
  };

  const { ...registerProps } = register(id, {
    valueAsNumber: options.type === 'number',
    validate: (value: any) => {
      const { valid } = validation(value);
      return valid;
    },
  });

  const getErrorMessage = () => {
    if (errors[id]) {
      if (errors[id]!.type === 'required') {
        return 'Required field.';
      } else if (errors[id]!.type === 'validate') {
        return validationValue.errorMsg;
      }
    }
    return '';
  };

  const errorMessage = getErrorMessage();

  return (
    <DefaultInputContainer>
      {label && <span>{label}</span>}

      <WrapperContainer>
        {icon && <IconContainer>{icon}</IconContainer>}

        <label htmlFor={id}>
          <input
            style={customStyle}
            id={id}
            {...options}
            {...registerProps}
            aria-invalid={errors[id] ? 'true' : 'false'}
          />
        </label>
      </WrapperContainer>

      {errorMessage && <ErrorContainer>{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}</ErrorContainer>}
    </DefaultInputContainer>
  );
}
