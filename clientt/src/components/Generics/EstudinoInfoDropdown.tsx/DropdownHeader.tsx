import React from 'react';
import styled from 'styled-components';
import AnimatedArrows from '../AnimatedArrows';

const HeaderWrapper = styled.div<{ $isOpen: boolean; $bgColor?: string; $contentColor?: string }>`
  cursor: pointer;
  width: 100%;
  min-height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  border-radius: ${({ $isOpen }) => ($isOpen ? 'var(--br-li) var(--br-li) 0 0' : 'var(--br-li)')};
  background-color: ${({ $bgColor }) => ($bgColor && $bgColor !== 'default' ? $bgColor : 'var(--color-gray4)')};
  padding: 0.75rem 1rem;

  transition: all 0.3s ease;

  span {
    color: ${({ $contentColor }) => $contentColor ?? 'var(--color-1)'};
    font-size: 16px;
    font-weight: 500;
  }

  svg {
    fill: ${({ $contentColor }) => ($contentColor ? $contentColor : 'var(--color-1)')};
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img,
  svg {
    width: 16px;
    height: 16px;
  }
`;

const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .caption {
    font-size: 12px;
    color: var(--color-gray);
  }
`;

interface IDropdownHeader {
  label: string;
  caption?: string;
  icon: React.ReactElement;
  isOpen: boolean;
  bgColor?: string;
  contentColor?: string;
  onClickFn: () => void;
}

export default function DropdownHeader({
  label,
  icon,
  caption,
  isOpen,
  bgColor,
  onClickFn,
  contentColor,
}: IDropdownHeader) {
  return (
    <HeaderWrapper $isOpen={isOpen} $bgColor={bgColor} $contentColor={contentColor} onClick={onClickFn}>
      <LeftWrapper>
        {icon}

        <TextsWrapper>
          <span>{label}</span>
          {caption && <span className="caption">{caption}</span>}
        </TextsWrapper>
      </LeftWrapper>

      <AnimatedArrows isOpen={isOpen} color={contentColor} />
    </HeaderWrapper>
  );
}
