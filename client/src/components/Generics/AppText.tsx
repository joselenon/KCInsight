import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  background-color: var(--color-2);
  padding: 0 0.25rem;
  border-radius: 2px;

  font-weight: 800 !important;
  color: var(--color-3) !important;

  .dino {
    font-weight: 800 !important;
    color: var(--color-blue) !important;
  }
`;

export default function AppText() {
  return (
    <Text>
      ESTU<span className="dino">DINO</span>
    </Text>
  );
}
