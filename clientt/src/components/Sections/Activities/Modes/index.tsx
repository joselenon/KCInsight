import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { useActivitiesContext } from '@/contexts/ActivitiesContext';
import Simple from './Simple';
import Session from './Session';
import { toast } from 'react-toastify';
import EstudinoInfoDropdown from '@/components/Generics/EstudinoInfoDropdown.tsx';
import { AiFillSwitcher } from 'react-icons/ai';
import TabSwitcher from '@/components/Generics/TabSwitcher';
import { useElementWidth } from '@/hooks/useElementWidth';

const FilterContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderWrapper = styled.div<{ $isOpen: boolean }>`
  cursor: pointer;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  border-radius: ${({ $isOpen }) => ($isOpen ? 'var(--br-sm) var(--br-sm) 0 0' : '--br-sm')};
  background-color: var(--color-1);
  padding: 0.5rem 1rem;

  transition: all 0.3s ease;

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

export default function Modes() {
  const { ref, isSmall } = useElementWidth<any>();
  const [isOpen, setIsOpen] = useState(true);
  const { mode, setMode } = useActivitiesContext();

  const elementModes: { [modeString: string]: React.ReactElement } = {
    simple: <Simple />,
    session: <Session />,
  };

  return (
    <FilterContainer ref={ref}>
      <EstudinoInfoDropdown
        defaultIsOpen={!isSmall()}
        headerConfig={{
          icon: <AiFillSwitcher />,
          label: 'Modos',
        }}
        bodyConfig={{
          children: (
            <BodyWrapper>
              <TabSwitcher
                selectedKey={mode}
                onSelect={setMode as any}
                options={[
                  {
                    key: 'simple',
                    label: 'Modo Simples',
                    content: <Simple />,
                  },
                  {
                    key: 'session',
                    label: 'Modo Sessão',
                    content: <Session />,
                    onClick: () => {
                      toast.info('Esse modo ainda não está pronto.');
                    },
                    disabled: true,
                  },
                ]}
              />

              {elementModes[mode]}
            </BodyWrapper>
          ),
        }}
      />
    </FilterContainer>
  );
}
