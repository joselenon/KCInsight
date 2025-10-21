import { motion, useAnimation, useInView } from 'framer-motion';
import React, { JSX, useEffect, useRef } from 'react';
import styled from 'styled-components';

const RevealContainer = styled.div<{ $width: string }>`
  position: relative;
  width: ${({ $width }) => `${$width}`};
`;

interface IRevealProps {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  height?: 'fit-content' | '100%' | 'auto';
  customY?: number;
}

export default function Reveal({ children, width = '100%', height = 'auto', customY }: IRevealProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <RevealContainer $width={width} style={{ width, height }} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: customY || -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        style={{ width, height }}
        transition={{ duration: 0.2, delay: 0 }}
      >
        {children}
      </motion.div>
    </RevealContainer>
  );
}
