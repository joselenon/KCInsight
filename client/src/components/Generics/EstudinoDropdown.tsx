import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { HiDotsVertical } from 'react-icons/hi';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useFloating, autoUpdate, offset, flip, shift, size, Placement } from '@floating-ui/react';

const TriggerButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-5);
  }
`;

const StyledTriggerWrapper = styled.div<{ $clickable?: boolean }>`
  width: inherit;
  min-height: inherit;
  height: inherit;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  /* NÃO force width:100% aqui se quer que o trigger tenha largura natural */
  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
    `}
  span {
    flex: 1;
    text-align: left;
  }
  svg {
    flex-shrink: 0;
  }
`;

/* IMPORTANT: box-sizing: border-box to include padding/border in width calc */
const StyledContent = styled(motion.div)`
  box-sizing: border-box;

  max-height: 240px;
  overflow-y: auto;

  background-color: var(--color-white);
  border: 1px solid var(--color-4);
  border-radius: var(--br-md);
  padding: 0.5rem 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  z-index: 5;
`;

export const StyledItem = styled.div<{ $disabled?: boolean }>`
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;

  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  span {
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover {
    background-color: ${({ $disabled }) => ($disabled ? 'transparent' : 'var(--color-5)')};
  }

  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  svg,
  img {
    flex-shrink: 0;
    width: 12px !important;
    height: 12px !important;
    fill: var(--color-2);
    path {
      fill: var(--color-2);
    }
  }
`;

export interface IDropdownOption {
  label: string;
  onClickFn: () => void;
  icon?: React.ReactElement;
  disabled?: boolean;
}

interface IEstudinoDropdown {
  options?: IDropdownOption[];
  trigger?: React.ReactNode;
  showArrow?: boolean;
  closeOnClick?: boolean;
  renderItem?: (option: IDropdownOption, close: () => void) => React.ReactNode;
  dropdownWidth?: 'fit-content' | 'triggerSize';
  placement?: Placement;
}

export default function EstudinoDropdown({
  options,
  trigger,
  showArrow = false,
  closeOnClick = true,
  renderItem,
  dropdownWidth = 'triggerSize',
  placement = 'bottom-end',
}: IEstudinoDropdown) {
  const [open, setOpen] = useState(false);
  const [triggerWidth, setTriggerWidth] = useState<number | null>(null);

  const { refs, floatingStyles, update } = useFloating({
    placement,
    middleware: [
      offset(6),
      flip(),
      shift({ padding: 8 }),
      size({
        apply({ rects, elements }) {
          if (dropdownWidth === 'triggerSize') {
            const w = rects.reference.width;
            Object.assign(elements.floating.style, {
              width: `${w}px`,
              minWidth: `${w}px`,
              boxSizing: 'border-box',
            });
          }
          if (dropdownWidth === 'fit-content') {
            elements.floating.style.width = 'fit-content';
            elements.floating.style.minWidth = '';
          }
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
    transform: false, // você já tinha; mantém
  });

  // Observa mudanças do trigger para atualizar o tamanho do dropdown (robustez extra)
  useEffect(() => {
    const refEl = refs.reference.current as HTMLElement | null;
    if (!refEl) return;

    const updateWidth = () => {
      const w = refEl.getBoundingClientRect().width;
      setTriggerWidth(w);
    };

    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(refEl);

    return () => {
      ro.disconnect();
    };
  }, [refs.reference]);

  // Fecha ao clicar fora (mantive sua lógica)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const refEl = refs.reference.current as HTMLElement | null;
      const floatEl = refs.floating.current;
      if (floatEl && refEl && !floatEl.contains(event.target as Node) && !refEl.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [refs]);

  const handleItemClick = (fn: () => void) => {
    fn();
    if (closeOnClick) setOpen(false);
  };

  return (
    <>
      {trigger ? (
        <StyledTriggerWrapper
          ref={refs.setReference}
          $clickable
          onClick={() => {
            setOpen((prev) => !prev);
            update(); // dispara recálculo
          }}
        >
          {trigger}
          {showArrow && (open ? <FiChevronUp /> : <FiChevronDown />)}
        </StyledTriggerWrapper>
      ) : (
        <TriggerButton
          ref={refs.setReference}
          onClick={() => {
            setOpen((p) => !p);
            update();
          }}
        >
          <HiDotsVertical />
        </TriggerButton>
      )}

      <AnimatePresence>
        {open && (
          <StyledContent
            ref={refs.setFloating}
            /* floatingStyles contém position/top/left. Nós sobreescrevemos width com triggerWidth (garantia extra) */
            style={{
              ...floatingStyles,
              ...(dropdownWidth === 'triggerSize' && triggerWidth
                ? { width: `${triggerWidth}px`, minWidth: `${triggerWidth}px` }
                : {}),
            }}
            initial={{ opacity: 0 /* opcional: remova scale pra evitar "efeito de encolhimento" */ }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            {options?.map((option, index) =>
              renderItem ? (
                <React.Fragment key={index}>{renderItem(option, () => setOpen(false))}</React.Fragment>
              ) : (
                <StyledItem
                  key={index}
                  $disabled={option.disabled}
                  onClick={() => {
                    if (!option.disabled) handleItemClick(option.onClickFn);
                  }}
                >
                  {option.icon}
                  {option.label}
                </StyledItem>
              ),
            )}
          </StyledContent>
        )}
      </AnimatePresence>
    </>
  );
}
