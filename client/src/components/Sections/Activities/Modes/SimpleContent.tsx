import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import DinoZapIcon from '@/assets/icons/DinoZap.png';
import PrimaryButton from '@/components/Generics/Buttons/PrimaryButton';
import { useActivitiesContext } from '@/contexts/ActivitiesContext';
import Simple from './Simple';
import Session from './Session';
import { toast } from 'react-toastify';
import EdChat from '../EdChat';
import DropdownHeader from '@/components/Generics/EstudinoInfoDropdown.tsx/DropdownHeader';
import EstudinoInfoDropdown from '@/components/Generics/EstudinoInfoDropdown.tsx';

const FilterContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  cursor: pointer;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  border-radius: var(--br-sm) var(--br-sm) 0 0;
  background-color: var(--color-whatsapp);
  padding: 0.5rem 1rem;

  span {
    color: var(--color-white);
    font-size: 16px;
    font-weight: 500;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

const BodyWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 0 0 var(--br-sm) var(--br-md);
  background-color: var(--color-white);
  padding: 1rem;
`;

const TabSelector = styled.div`
  display: flex;
  background: #f3f3f3;
  border-radius: var(--br-md);
  padding: 4px;
  width: 100%;
`;

const Tab = styled.button<{ selected: boolean }>`
  flex: 1;
  position: relative;
  z-index: 1;
  padding: 0.4rem 0.6rem;

  border: none;
  background: none;
  color: ${({ selected }) => (selected ? 'white' : '#333')};
  cursor: pointer;

  span {
    font-size: 12px;
    font-weight: 600;
  }
`;

const TabBackground = styled(motion.div)`
  position: absolute;
  top: 4px;
  bottom: 4px;
  border-radius: var(--br-md);
  background: var(--color-1);
  z-index: 0;
`;

export default function SimpleContent() {
  const [isOpen, setIsOpen] = useState(true);
  const { mode, setMode } = useActivitiesContext();

  const elementModes: { [modeString: string]: React.ReactElement } = {
    simple: <Simple />,
    session: <Session />,
  };

  return (
    <FilterContainer>
      <EstudinoInfoDropdown
        headerConfig={{
          icon: <img src={DinoZapIcon} alt="DinoZap icon" />,
          label: 'DinoZap',
          bgColor: 'var(--color-whatsapp)',
          contentColor: 'var(--color-white)',
        }}
        bodyConfig={{
          children: (
            <BodyWrapper>
              <EdChat />
            </BodyWrapper>
          ),
        }}
      />
    </FilterContainer>
  );
}
