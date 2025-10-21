import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import reduxStore from './redux';
import queryClient from './services/ReactQueryClient';
import { AnalyticsListener } from './components/AnalyticsListener';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={reduxStore}>
    {/*       <React.StrictMode> */}
    <BrowserRouter>
      <AnalyticsListener />

      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
    {/*       </React.StrictMode> */}
  </Provider>,
);
