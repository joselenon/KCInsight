import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div<{ $bgColor?: string }>`
  padding: 0 0.5rem 0.5rem 0.5rem;

  background-color: ${({ $bgColor }) => ($bgColor && $bgColor !== 'default' ? $bgColor : 'var(--color-gray4)')};
  border-radius: 0 0 var(--br-li) var(--br-li);

  transition: all 0.3s ease;
`;

export default function DropdownBody({
  isOpen,
  children,
  bgColor,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  bgColor?: string;
}) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="filters"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          style={{ width: '100%', height: '100%' }}
        >
          <BodyWrapper $bgColor={bgColor}>{children}</BodyWrapper>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
