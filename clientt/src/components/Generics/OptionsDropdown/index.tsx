// components/Sections/Decks/DeckStudy/GearDropdown.tsx
import IconButton from '@/components/Generics/Buttons/IconButton';
import Reveal from '@/components/Generics/Reveal';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import SVGButton from '../Buttons/SVGButton';

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;

  svg {
    width: 20px !important;
    height: 20px !important;
    fill: var(--color-2);
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  z-index: 2;
  right: 0;
  top: 1.5rem;

  background-color: var(--color-6);
  border: 1px solid var(--color-4);
  border-radius: var(--br-md);

  list-style: none;
  padding: 0.5rem 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  height: 40px;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 1rem;

  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;

  &:hover {
    background-color: var(--color-5);
  }

  svg {
    width: 14px !important;
    height: 14px !important;
    fill: var(--color-2);
  }
`;

interface OptionsDropdown {
  options: { icon: React.ReactElement; label: string; onClickFn: () => void }[];
}

import { HiDotsVertical } from 'react-icons/hi';

export default function OptionsDropdown({ options }: OptionsDropdown) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <SVGButton attributes={{ onClick: () => setOpen((prev) => !prev) }}>
        <HiDotsVertical />
      </SVGButton>

      <AnimatePresence>
        {open && (
          <motion.ul
            key="dropdown"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.1 }}
            style={{ position: 'absolute', zIndex: 2, right: 0, top: '0.5rem' }}
          >
            <DropdownMenu as="div">
              {/* substitui styled.ul por styled.div se necessário */}
              {options.map(({ icon, label, onClickFn }) => (
                <DropdownItem onClick={onClickFn} key={label}>
                  {icon}
                  {label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </motion.ul>
        )}
      </AnimatePresence>
    </DropdownWrapper>
  );
}
