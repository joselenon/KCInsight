import React, { JSX, useState } from 'react';
import styled from 'styled-components';

import {
  CommonStyles,
  ErrorContainerCommonStyles,
  ErrorMessageCommonStyles,
  IconContainerCommonStyles,
  WrapperCommonStyles,
} from './CommonStyles';

import { UseFormGetValues, UseFormReturn } from 'react-hook-form';
import EstudinoDropdown from '../../EstudinoDropdown';
import DisciplineAndIcon from '@/components/DisciplineAndIcon';

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

const SelectBox = styled.div`
  cursor: pointer;

  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--color-gray4);
  border-radius: var(--br-sm);
  padding: 0.5rem;
`;

export interface ICreateDefaultSelect {
  id: string;
  label?: string;
  icon?: JSX.Element;
  rhfConfig: UseFormReturn<any>;
  validationFn: (
    value: any,
    getValues: UseFormGetValues<any>,
  ) => {
    valid: boolean;
    errorMsg: string;
  };
  options?: React.InputHTMLAttributes<HTMLInputElement>;
  items: { value: string | number; label: string; icon?: React.ReactElement }[];
  customStyle?: React.CSSProperties;
}

export default function GenericSelect(props: ICreateDefaultSelect) {
  const { id, label, icon, items, rhfConfig, validationFn, customStyle } = props;

  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = rhfConfig;

  const [validationValue, setValidationValue] = useState({
    valid: false,
    errorMsg: '',
  });

  const selectedValue = watch(id) as string | number | undefined;
  const selectedLabel = items.find((item) => item.value === selectedValue) ?? { label: '', value: '' };

  const validation = (value: any) => {
    const validate = validationFn(value, getValues);
    setValidationValue(validate);
    return validate;
  };

  // registrar campo hidden para RHF
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
    <DefaultSelectContainer>
      {label && <span>{label}</span>}

      <WrapperContainer>
        {icon && <IconContainer>{icon}</IconContainer>}

        <EstudinoDropdown
          trigger={
            <SelectBox>
              {selectedLabel.icon}
              <span>{selectedLabel.label}</span>
            </SelectBox>
          }
          options={items.map((item) => ({
            label: item.label,
            icon: item.icon,
            onClickFn: () => {
              setValue(id, item.value, { shouldValidate: true, shouldDirty: true });
            },
          }))}
        />

        <input type="hidden" id={id} {...registerProps} />
      </WrapperContainer>

      {errorMessage && (
        <ErrorContainer>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorContainer>
      )}
    </DefaultSelectContainer>
  );
}
