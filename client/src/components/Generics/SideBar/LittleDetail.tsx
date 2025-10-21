import React from 'react';
import styled from 'styled-components';

const LittleDetailWrap = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  z-index: 100 !important;
  top: 70px;
  background-color: var(--color-2);
`;

const LittleDetailCircle = styled.div<{ $side: 'left' | 'right' }>`
  width: 20px;
  height: 20px;
  background-color: var(--color-background);

  border-radius: ${({ $side }) => ($side === 'left' ? 'var(--br-xl) 0 0 0' : '0 var(--br-xl) 0 0')};
`;

export default function LittleDetail({ SIDE, sidebarWidth }: { SIDE: 'left' | 'right'; sidebarWidth: string }) {
  return (
    <LittleDetailWrap $side={SIDE} style={{ [SIDE === 'left' ? 'right' : 'left']: 'calc(0px - 20px)' }}>
      <LittleDetailCircle $side={SIDE} />
    </LittleDetailWrap>
  );
}
