import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@app/App';
import { ThemeProvider } from '@app/providers/ThemeProviders';

import '@shared/config/i18next/i18next';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback="">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Suspense>
  </StrictMode>,
);
