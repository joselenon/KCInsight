import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import MyRoutes from './routes';
import GlobalStyles, { Body } from './styles/GlobalStyles';
import ScrollToTop from './utils/ScrollToTop';
import Header from './components/Sections/Header';
import { useEffect, useRef } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import styled from 'styled-components';
import { SideBarContextProvider } from './contexts/SideBarContext';
import AllModals from './components/Sections/AllModals';
import { AuthContextProvider, useAuthContext } from './contexts/AuthContext';
import NoAuthPage from './components/NoAuthPage';
import { ModalContextProvider } from './contexts/ModalContext';

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
  const { isAuthenticated } = useAuthContext();

  const ContentRef = useRef<null | HTMLDivElement>(null);

  const SIDE: 'right' | 'left' = 'left';

  useEffect(() => {
    document.fonts.load('1em Gotham').then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }, []);

  return (
    <>
      <ModalContextProvider>
        <I18nextProvider i18n={i18n}>
          <AuthContextProvider>
            <SideBarContextProvider>
              <NoAuthPage />

              <Container $side={SIDE}>
                <Header />

                <Content ref={ContentRef}>
                  <MyRoutes />
                  <AllModals />
                </Content>
              </Container>
            </SideBarContextProvider>
          </AuthContextProvider>

          <ScrollToTop containerRef={ContentRef} />
        </I18nextProvider>

        <GlobalStyles />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          closeOnClick
          rtl={false}
          draggable={'mouse'}
          theme="light"
        />
      </ModalContextProvider>
    </>
  );
}

export default App;
