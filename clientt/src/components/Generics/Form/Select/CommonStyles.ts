import { css } from 'styled-components';

export const CommonStyles = css`
  width: 100%;

  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  select {
    width: 100%;
    height: var(--elements-height);

    border-radius: var(--br-md);
    padding: 0.5rem 1rem;
    border: none;

    font-family: var(--primary-font);
    font-size: 1rem;
    color: var(--color-secondary);
  }

  select:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  select:focus {
    outline: none;
  }

  span {
    font-size: 14px;
    font-weight: 500 !important;
  }
`;

export const WrapperCommonStyles = css`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  /* Input Color */
  border-radius: var(--br-md);

  label {
    width: 100%;
  }
`;

export const ErrorContainerCommonStyles = css``;

export const ErrorMessageCommonStyles = css`
  font-size: 12px;
  color: var(--color-red) !important;
`;

export const IconContainerCommonStyles = css`
  display: flex;
  svg {
    color: var(--color-gray);
  }
`;
