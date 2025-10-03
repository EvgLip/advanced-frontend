import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@app/App';
import { ThemeProvider } from '@app/providers/theme-provider';

import '@shared/config/i18next/i18next';
import { StoreProvider } from '@app/providers/store-proveder';
import { store } from '@app/providers/store-proveder/config/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback="">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Suspense>
    </Provider>
  </StrictMode>,
);
