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

const DefaultSelectContainer = styled.div<{ $customStyle?: React.CSSProperties }>`
  ${CommonStyles}
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

export interface ICreateDefaultSelect {
  id: string;
  label?: string;
  icon?: JSX.Element;
  rhfConfig: UseFormReturn<any>;
  validationFn: (value: any, getValues: UseFormGetValues<any>) => { valid: boolean; errorMsg: string };
  options: React.SelectHTMLAttributes<HTMLSelectElement>;
  selectOptions: { label: string; value: string }[];
  customStyle?: React.CSSProperties;
}

export default function DefaultSelect(props: ICreateDefaultSelect) {
  const { id, label, icon, options, rhfConfig, validationFn, selectOptions, customStyle } = props;

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
    <DefaultSelectContainer style={customStyle}>
      {label && <span>{label}</span>}

      <WrapperContainer>
        {icon && <IconContainer>{icon}</IconContainer>}

        <label htmlFor={id}>
          <select id={id} {...options} {...registerProps} aria-invalid={errors[id] ? 'true' : 'false'}>
            {selectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </WrapperContainer>

      {errorMessage && (
        <ErrorContainer>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorContainer>
      )}
    </DefaultSelectContainer>
  );
}
