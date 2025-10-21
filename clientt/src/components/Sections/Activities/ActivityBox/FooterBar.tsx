import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { SVGReport } from '@/assets/EstudinoSVGs';
import { DISCIPLINE_COLOR_FROM_SLUG } from '@/data/DISCIPLINE_COLOR_FROM_SLUG';
import { IActivityBox, TFooterBarItem } from '.';
import { toast } from 'react-toastify';
import LoadingGif from '@/components/Generics/LoadingGif';

const FooterContainer = styled.div<{ $itemActive: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: var(--color-gray4);
  border-radius: ${({ $itemActive }) => ($itemActive ? 'none' : '0 0 var(--br-md) var(--br-md)')};
  padding: 0 1rem;

  gap: 1rem;
`;

const FooterItem = styled.div<{ $active?: boolean; $color?: string; $disabled?: boolean }>`
  cursor: pointer;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  background-color: var(--color-gray4);

  padding: 1rem;

  span {
    font-weight: 500;
    font-size: 14px;
    color: ${({ $color, $active }) => ($color && $active ? $color : 'var(--color-gray)')};
  }

  svg,
  img {
    width: 14px;
    height: 14px;
  }

  svg {
    fill: ${({ $color, $active }) => ($color && $active ? $color : 'var(--color-gray)')};
  }

  &:hover {
    filter: brightness(0.97);
  }

  ${({ $active, $color }) =>
    $active &&
    css`
      span {
        color: ${$color};
      }

      position: relative;

      &::after {
        content: '';
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 2px;
        background-color: ${$color};
        border-radius: 2px;
      }
    `}
`;

const ActiveItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-gray4);
  border-radius: 0 0 var(--br-md) var(--br-md);
  padding: 1rem 1.5rem;
  padding-bottom: 1.5rem;
  border-top: 1px solid var(--color-gray3);
`;

export default function FooterBar({
  activityId,
  disciplineSlug,
  footerBarConfig,
}: {
  activityId: string;
  disciplineSlug: string;
  extraFooterBarItems?: TFooterBarItem[];
  footerBarConfig: IActivityBox['footerBarConfig'];
}) {
  const defaultActiveItemId = footerBarConfig?.disableItems?.disable
    ? undefined
    : footerBarConfig?.defaultActiveItemId
      ? footerBarConfig.defaultActiveItemId
      : undefined;

  const [activeItem, setActiveItem] = useState<string | undefined>(defaultActiveItemId);

  const disciplineColor = DISCIPLINE_COLOR_FROM_SLUG[disciplineSlug];

  const items: TFooterBarItem[] = [...(footerBarConfig?.extraFooterBarItems || [])];

  const handleClick = (item: TFooterBarItem) => {
    if (footerBarConfig?.disableItems?.disable) {
      if (footerBarConfig?.disableItems?.msg) {
        toast.warn(footerBarConfig?.disableItems?.msg);
      }
      return;
    }

    if (item.toggle) {
      item.toggle();
    }
    if (item.element) {
      setActiveItem((prev) => (prev === item.id ? undefined : item.id)); // toggle abre/fecha
    }
  };

  const activeElement = items.find((i) => i.id === activeItem)?.element;

  return (
    <>
      <FooterContainer $itemActive={!!activeItem}>
        {items.map((item) => (
          <FooterItem
            key={item.id}
            onClick={() => handleClick(item)}
            $active={activeItem === item.id}
            $color={disciplineColor}
            $disabled={footerBarConfig?.disableItems?.disable}
          >
            {item.icon}
            <span>{item.label}</span>
          </FooterItem>
        ))}
      </FooterContainer>

      {activeElement && <ActiveItemContainer>{activeElement}</ActiveItemContainer>}
    </>
  );
}
