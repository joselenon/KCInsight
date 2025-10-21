import React from 'react';
import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // esconde o checkbox, mas mantém acessível
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${({ checked }) => (checked ? 'var(--color-1)' : 'white')};
  border-radius: 4px;
  border: 1.5px solid ${({ checked }) => (checked ? 'var(--color-1)' : '#ccc')};
  transition: all 150ms;
  cursor: pointer;
  position: relative; /* necessário para o absolute abaixo */

  &:after {
    content: '';
    position: absolute;
    left: 7px;
    top: 3px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 1;
    transition: all 150ms;
  }
`;
const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  id?: string;
  label?: React.ReactNode;
};

export const EstudinoCheckbox = ({ checked, onChange, id, label }: CheckboxProps) => (
  <CheckboxContainer htmlFor={id}>
    <HiddenCheckbox id={id} checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked} />
    {label && <span style={{ marginLeft: 8 }}>{label}</span>}
  </CheckboxContainer>
);
