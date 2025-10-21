import React from 'react';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';
import { CommonStyles } from './CommonStyles';

interface Props {
  label?: string;
  id: string;
  rhfConfig: any;
}

const SwitchInputContainer = styled.div`
  ${CommonStyles}

  display: flex;
  align-items: center;
  gap: 8px;
`;

const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #4caf50;
  }

  &:checked + span::before {
    transform: translateX(24px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: background-color 0.2s;
  border-radius: 34px;

  &::before {
    content: '';
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: transform 0.2s;
    border-radius: 50%;
  }
`;

const SwitchInput: React.FC<Props> = ({ label, id, rhfConfig }) => {
  return (
    <SwitchInputContainer>
      {label && <span>{label}</span>}
      <Controller
        name={id}
        control={rhfConfig.control}
        defaultValue={true}
        render={({ field }) => (
          <SwitchWrapper>
            <HiddenCheckbox id={id} checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
            <Slider />
          </SwitchWrapper>
        )}
      />
    </SwitchInputContainer>
  );
};

export default SwitchInput;
