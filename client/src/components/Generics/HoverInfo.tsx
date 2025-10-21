import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useFloating, offset, flip, shift, autoUpdate, Placement } from '@floating-ui/react';
import styled from 'styled-components';

const HoveredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white);
  border-radius: var(--br-lg);
  border: 1px solid var(--color-gray3);
  padding: 0.5rem 0.75rem;

  box-shadow: 0 2px 10px var(--color-gray3);

  font-size: 14px;
  transition: opacity 0.15s ease;
  z-index: 6;
  pointer-events: none; // evita capturar hover
`;

interface IHoverInfo {
  trigger: React.ReactNode;
  children: React.ReactNode;
  placement?: Placement;
}

export default function HoverInfo({ trigger, children, placement = 'bottom' }: IHoverInfo) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, strategy } = useFloating({
    placement,
    middleware: [offset(6), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
    strategy: 'fixed',
  });

  return (
    <>
      <div
        ref={refs.setReference}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        style={{ display: 'inline-block', cursor: 'pointer', borderRadius: 8 }}
      >
        {trigger}
      </div>

      {open && typeof document !== 'undefined'
        ? createPortal(
            <HoveredBox
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
                position: strategy,
                maxWidth: 240,
                opacity: open ? 1 : 0,
              }}
            >
              {children}
            </HoveredBox>,
            document.body,
          )
        : null}
    </>
  );
}
