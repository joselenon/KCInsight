import { ToastContainer } from 'react-toastify';

import MyRoutes from './routes';
import GlobalStyles, { Body } from './styles/GlobalStyles';
import ScrollToTop from './utils/ScrollToTop';
import { useEffect, useRef } from 'react';
import { I18nextProvider } from 'react-i18next';
import styled from 'styled-components';
import Header from './components/Sections/Header';

const Container = styled.div<{ $side: 'right' | 'left' }>`
  display: flex;
  overflow: hidden;
  flex-direction: ${({ $side }) => ($side === 'left' ? 'row' : 'row-reverse')};
  height: 100vh;
`;

const Content = styled.div`
  overflow-y: scroll;
  flex-grow: 1;
`;

function App() {
  const ContentRef = useRef<null | HTMLDivElement>(null);

  const SIDE: 'right' | 'left' = 'left';

  useEffect(() => {
    document.fonts.load('1em Gotham').then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }, []);

  return (
    <>
      <Container $side={SIDE}>
        <Header />

        <Content ref={ContentRef}>
          <MyRoutes />
        </Content>
      </Container>

      <ScrollToTop containerRef={ContentRef} />

      <GlobalStyles />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick
        rtl={false}
        draggable={'mouse'}
        theme="light"
      />
    </>
  );
}

export default App;
