import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/app/App';
import { ThemeProvider } from '@/app/providers/theme-provider';

import '@/shared/config/i18next/i18next';
import { StoreProvider } from '@/app/providers/store-proveder';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider >
      <Suspense fallback="">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Suspense>
    </StoreProvider>
  </StrictMode>,
);
