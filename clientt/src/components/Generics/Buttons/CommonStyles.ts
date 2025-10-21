import { css } from 'styled-components';

export const CommonStyles = css`
  cursor: pointer;
  flex-shrink: 0;

  height: var(--elements-height);

  border: none;
  border-radius: var(--br-xl);
  padding: 0px calc(1.5rem - 5px);

  white-space: nowrap;
  font-family: var(--font-primary) !important;

  span {
    font-size: 14px;
    font-weight: 500 !important;
  }

  &:hover {
    filter: brightness(0.95);
  }
  &:active {
    filter: brightness(0.85);
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.6;
    transform: translateY(0px);
  }
`;
