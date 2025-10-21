import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import EstudinoDropdown from '../../EstudinoDropdown';

// ---------- Estilos ----------
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 14px;
`;

const SelectBox = styled.div`
  cursor: pointer;

  width: 100%;
  min-height: var(--elements-height);

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: var(--br-sm);
  background-color: var(--color-lightgrey);
  padding: 0.5rem 1rem;
`;

const SelectedItemWrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-grey);
`;

const Placeholder = styled.span`
  opacity: 0.5;
  color: var(--color-grey);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: var(--br-md);
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const OptionRow = styled.div`
  cursor: pointer;

  padding: 0.5rem 1rem;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    background-color: var(--color-gray5);
  }
`;

export interface IOption<D> {
  value: D;
  label: string;
  icon?: React.ReactElement;
  disabled?: boolean;
}

interface EstudinoSelectProps<D> {
  id?: string;
  label?: string;
  options: IOption<D>[];
  placeholder?: string;
  customStyle?: React.CSSProperties;
  withSearch?: boolean;
  customRenderOptions?: (option: IOption<D>['label'], isSelected: boolean) => React.ReactNode;
  value?: D;
  onChange: (value: D) => void;
  dropdownWidth?: 'fit-content' | 'triggerSize';
}

export function EstudinoSelect<D>({
  id,
  label,
  options,
  placeholder,
  customStyle,
  withSearch = false,
  customRenderOptions,
  value,
  onChange,
  dropdownWidth,
}: EstudinoSelectProps<D>) {
  const optionsMap = useMemo(() => new Map(options.map((o) => [o.value, o])), [options]);

  const [searchTerm, setSearchTerm] = useState('');
  const filteredOptions = useMemo(() => {
    return options.filter((o) => o.label.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [options, searchTerm]);

  const handleSelect = useCallback(
    (optionValue: IOption<D>['value']) => {
      onChange(optionValue);
    },
    [onChange],
  );

  const selectedOption = value ? optionsMap.get(value) : undefined;

  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}

      <EstudinoDropdown
        closeOnClick
        dropdownWidth={dropdownWidth}
        options={options.map(({ label, value }) => ({ label, value, onClickFn: () => handleSelect(value) }))}
        trigger={
          <SelectBox style={customStyle}>
            <SelectedItemWrapper>
              {selectedOption ? (
                selectedOption.label
              ) : (
                <Placeholder>{placeholder || `Selecione ${label?.toLowerCase()}`}</Placeholder>
              )}
            </SelectedItemWrapper>
          </SelectBox>
        }
        renderItem={({ label, onClickFn }, close) => (
          <>
            {/*    <div>
              {!withSearch && (
                <SearchInput
                  type="text"
                  placeholder={`Pesquisar ${label?.toLowerCase()}`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                />
              )}
              {filteredOptions.length === 0 && (
                <div style={{ textAlign: 'center', fontSize: 14 }}>Nenhuma opção encontrada</div>
              )}
            </div> */}

            <OptionRow
              onClick={() => {
                onClickFn();
                close();
              }}
              className="item"
            >
              {customRenderOptions ? customRenderOptions(label, true) : label}
            </OptionRow>
          </>
        )}
      />
    </Wrapper>
  );
}
