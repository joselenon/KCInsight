import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Tab = styled.button<{ selected: boolean }>`
  cursor: pointer;
  position: relative;
  z-index: 1;
  flex: 1;

  background: none;
  border: none;
  padding: 0.4rem 0.6rem;

  color: ${({ selected }) => (selected ? 'white' : '#333')};

  span {
    color: ${({ selected }) => (selected ? 'var(--color-2)' : 'var(--color-white)')};
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TabSelector = styled.div`
  width: 100%;
  overflow: hidden;

  position: relative;

  display: flex;

  background: #1b3d5d;
  border-radius: var(--br-md);
  padding: 0.25rem;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-top: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TabBackground = styled(motion.div)`
  position: absolute;
  top: 4px;
  bottom: 4px;

  border-radius: var(--br-md);
  background: var(--color-white);
  z-index: 0;
  transition:
    left 0.3s ease,
    width 0.3s ease;
`;

type TabOption = {
  key: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

type TabSwitcherProps = {
  selectedKey: string;
  onSelect: (key: string) => void;
  options: TabOption[];
};

export default function TabSwitcher({ selectedKey, onSelect, options }: TabSwitcherProps) {
  const selectedIndex = options.findIndex((opt) => opt.key === selectedKey);

  return (
    <Wrapper>
      <TabSelector>
        {options.map((option, index) => (
          <Tab
            key={option.key}
            selected={option.key === selectedKey}
            onClick={() => {
              if (!option.disabled) {
                option.onClick?.();
                onSelect(option.key);
              }
            }}
          >
            <span>{option.label}</span>
          </Tab>
        ))}
        <TabBackground
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{
            left: `${(100 / options.length) * selectedIndex}%`,
            width: `${100 / options.length}%`,
          }}
        />
      </TabSelector>

      <ContentContainer>{options.find((opt) => opt.key === selectedKey)?.content}</ContentContainer>
    </Wrapper>
  );
}
