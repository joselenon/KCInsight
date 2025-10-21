import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollToTop({ containerRef }: ScrollToTopProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [pathname, containerRef]);

  return null;
}
