import React, { createContext, useContext, useEffect, useRef, useState, RefObject, useCallback } from 'react';

export type Side = 'left' | 'right';

export interface SideBarState {
  show: boolean;
  width: number;
}

export interface SideBarContextProps {
  sideBars: {
    left: SideBarState;
    right: SideBarState;
  };
  toggleSidebar: (side: Side) => void;
  refs: {
    left: RefObject<HTMLDivElement | null>;
    right: RefObject<HTMLDivElement | null>;
  };
  SideBarMinWidth: number;
}

const SideBarMinWidth = 850;
const SideBarSingleOpenLimit = 1500;

const SideBarContext = createContext<SideBarContextProps>({
  sideBars: {
    left: { show: false, width: 0 },
    right: { show: false, width: 0 },
  },
  toggleSidebar: () => {},
  refs: {
    left: { current: null },
    right: { current: null },
  },
  SideBarMinWidth,
});

export function SideBarContextProvider({ children }: { children: React.ReactNode }) {
  // Inicializa baseado na largura da janela
  const initialShowLeft = window.innerWidth >= SideBarMinWidth;

  const [sideBars, setSideBars] = useState({
    left: {
      show: initialShowLeft,
      width: 0,
    },
    right: {
      show: false,
      width: 0,
    },
  });

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Atualiza largura se mudou, evita setState se largura igual (otimização)
  const updateWidth = useCallback((side: Side, ref: RefObject<HTMLDivElement | null>) => {
    if (!ref.current || !ref.current.isConnected) return;

    const newWidth = ref.current.getBoundingClientRect().width || 0;
    setSideBars((prev) => {
      const prevWidth = prev[side].width;
      if (prevWidth === newWidth) return prev; // Sem mudanças
      return {
        ...prev,
        [side]: {
          ...prev[side],
          width: newWidth,
        },
      };
    });
  }, []);

  const toggleSidebar = useCallback((side: Side) => {
    const width = window.innerWidth;
    const isMobile = width < SideBarMinWidth;
    const isLimitedWidth = width < SideBarSingleOpenLimit;
    const opposite: Side = side === 'left' ? 'right' : 'left';

    setSideBars((prev) => {
      const currentShow = prev[side].show;
      const toggledShow = !currentShow;
      const updated = { ...prev };

      if (isMobile) {
        // Mobile: alterna o lado solicitado e fecha o outro
        updated[side].show = toggledShow;
        updated[side].width = toggledShow ? updated[side].width : 0;
        updated[opposite].show = false;
        updated[opposite].width = 0;
        return updated;
      }

      if (isLimitedWidth) {
        updated[side].show = toggledShow;
        updated[side].width = toggledShow ? updated[side].width : 0;
        if (toggledShow && prev[opposite].show) {
          updated[opposite].show = false;
          updated[opposite].width = 0;
        }
        return updated;
      }

      // Acima de 1300px: só alterna, largura será atualizada via ResizeObserver
      updated[side].show = toggledShow;
      updated[side].width = toggledShow ? updated[side].width : 0;
      return updated;
    });
  }, []);

  // Observa mudanças de tamanho das sidebars, atualiza largura
  useEffect(() => {
    function observeSide(side: Side, ref: RefObject<HTMLDivElement | null>) {
      if (!ref.current) return () => {};

      const observer = new ResizeObserver(() => {
        if (sideBars[side].show) {
          updateWidth(side, ref);
        }
      });
      observer.observe(ref.current);

      // Chamada inicial
      if (sideBars[side].show) {
        updateWidth(side, ref);
      }

      return () => observer.disconnect();
    }

    const leftCleanup = observeSide('left', leftRef);
    const rightCleanup = observeSide('right', rightRef);

    return () => {
      leftCleanup?.();
      rightCleanup?.();
    };
  }, [updateWidth, sideBars]);

  // Listener resize da janela para ajustar show e larguras sem causar re-render excessivo
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      const isMobile = width < SideBarMinWidth;
      const isLimitedWidth = width < SideBarSingleOpenLimit;

      setSideBars((prev) => {
        const updated = { ...prev };
        let changed = false;

        if (isMobile) {
          if (prev.left.show || prev.left.width !== 0) {
            updated.left = { show: false, width: 0 };
            changed = true;
          }
          if (prev.right.show || prev.right.width !== 0) {
            updated.right = { show: false, width: 0 };
            changed = true;
          }
        } else if (isLimitedWidth) {
          // Se ambas abertas, fecha a direita
          if (prev.left.show && prev.right.show) {
            updated.right = { show: false, width: 0 };
            changed = true;
          }
          // Largura será atualizada via observer, então não precisa mexer aqui
        } else {
          // Acima de 1300px: não muda show, só garante largura via observer
        }

        return changed ? updated : prev;
      });
    };

    window.addEventListener('resize', handleResize);
    // Dispara uma vez na montagem para sincronizar estado inicial
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SideBarContext.Provider
      value={{
        sideBars,
        toggleSidebar,
        refs: {
          left: leftRef,
          right: rightRef,
        },
        SideBarMinWidth,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}

export function useSideBarContext() {
  return useContext(SideBarContext);
}
