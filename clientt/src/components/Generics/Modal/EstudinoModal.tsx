import Modal from '@/components/Generics/Modal';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div<{ $bgColor?: string; $contentColor?: string }>`
  width: 100%;
  min-height: 50px;
  padding: 0.75rem 1rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  border-radius: var(--br-xl) var(--br-xl) 0 0;
  background-color: ${({ $bgColor }) => ($bgColor && $bgColor !== 'default' ? $bgColor : 'var(--color-gray4)')};

  h5 {
    text-align: center;
    color: var(--color-2);
  }

  span {
    color: ${({ $contentColor }) => $contentColor ?? 'var(--color-1)'};
    font-size: 16px;
    font-weight: 500;
  }

  svg {
    fill: ${({ $contentColor }) => ($contentColor ? $contentColor : 'var(--color-1)')};
  }

  .caption {
    font-size: 12px;
    color: var(--color-gray);
  }
`;

const Body = styled.div<{ $bgColor?: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  border-radius: 0 0 var(--br-xl) var(--br-xl);
  background-color: ${({ $bgColor }) => ($bgColor && $bgColor !== 'default' ? $bgColor : 'var(--color-white)')};
`;

const Texts = styled.span`
  color: var(--color-gray);

  .highlight {
    color: var(--color-1);
  }
`;

interface IEstudinoModal {
  title: string;
  description?: string | React.ReactElement;
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  headerCaption?: string;
  headerBgColor?: string;
  bodyBgColor?: string;
  contentMaxWidth?: number;
}

export default function EstudinoModal({
  title,
  description,
  children,
  showModal,
  setShowModal,
  headerCaption,
  headerBgColor,
  bodyBgColor,
  contentMaxWidth,
}: IEstudinoModal) {
  return (
    <Modal showModal={showModal} setShowModal={setShowModal} contentMaxWidth={contentMaxWidth || 400}>
      <Wrapper>
        <Header $bgColor={bodyBgColor}>
          <h5>{title}</h5>
          {headerCaption && <span className="caption">{headerCaption}</span>}
        </Header>

        <Body $bgColor={bodyBgColor}>
          {description && <Texts>{description}</Texts>}
          {children}
        </Body>
      </Wrapper>
    </Modal>
  );
}
