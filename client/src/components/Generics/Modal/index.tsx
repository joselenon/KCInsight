import { motion } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, RuleSet } from 'styled-components';
import Reveal from '../Reveal';

interface IModalContainerProps {
  $show: 'true' | 'false';
}

interface IModalProps {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  contentMaxWidth?: number;
  modalColor?: string; // New prop for content background color
  customStyle?: React.CSSProperties;
}

const ModalBackground = styled.div<{ $showModal: boolean }>`
  z-index: 0;
  position: fixed;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $showModal }) => ($showModal ? 1 : 0)};

  transition: opacity 0.5s;
`;

const ModalContainer = styled(motion.div)<IModalContainerProps>`
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  display: ${({ $show }) => ($show === 'true' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
`;

const ModalContent = styled.div`
  width: 100%;
  max-height: 800px;

  display: flex;
  flex-direction: column;

  border-radius: var(--br-xl);
`;

const ModalBodyWrapper = styled.div<{ $contentMaxWidth: number }>`
  max-width: ${({ $contentMaxWidth }) => `${$contentMaxWidth}px`};
  width: 100%;
`;

export default function Modal({ children, setShowModal, showModal, contentMaxWidth = 550, customStyle }: IModalProps) {
  const toggleModal = () => {
    if (setShowModal) {
      setShowModal((prev) => !prev);
      if (!showModal) setShowModal(true);
      if (showModal) setShowModal(false);
    }
  };

  /* Always appear in the document.body */
  return ReactDOM.createPortal(
    <ModalContainer key="modal" exit={{ opacity: 0 }} $show={showModal ? 'true' : 'false'}>
      <ModalBackground $showModal={showModal} onClick={() => toggleModal()} />

      <ModalBodyWrapper $contentMaxWidth={contentMaxWidth}>
        {/* Important condition to restart the reveal animation */}
        {showModal && (
          <Reveal width="100%">
            <ModalContent style={customStyle}>{children}</ModalContent>
          </Reveal>
        )}
      </ModalBodyWrapper>
    </ModalContainer>,
    document.body,
  );
}
