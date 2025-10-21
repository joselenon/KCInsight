import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropdownHeader from './DropdownHeader';
import DropdownBody from './DropdownBody';

const FilterContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

interface IDropdownHeader {
  label: string;
  caption?: string;
  icon: React.ReactElement;
  bgColor?: string;
  contentColor?: string;
}

interface IDropdownBody {
  children: React.ReactNode;
}

interface IEstudinoInfoDropdown {
  headerConfig: IDropdownHeader;
  bodyConfig: IDropdownBody;
  defaultIsOpen?: boolean;
}

export default function EstudinoInfoDropdown({ bodyConfig, headerConfig, defaultIsOpen }: IEstudinoInfoDropdown) {
  const [isOpen, setIsOpen] = useState(typeof defaultIsOpen === 'boolean' ? defaultIsOpen : true);

  useEffect(() => {
    if (typeof defaultIsOpen === 'boolean') {
      setIsOpen(defaultIsOpen);
    }
  }, [defaultIsOpen]);

  const { label, icon, bgColor, caption, contentColor } = headerConfig;
  const { children } = bodyConfig;

  return (
    <FilterContainer>
      <DropdownHeader
        contentColor={contentColor}
        bgColor={bgColor}
        caption={caption}
        label={label}
        icon={icon}
        isOpen={isOpen}
        onClickFn={() => setIsOpen((prev) => !prev)}
      />
      <DropdownBody bgColor={bgColor} isOpen={isOpen}>
        {children}
      </DropdownBody>
    </FilterContainer>
  );
}
