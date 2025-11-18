import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/app/App';

import '@/shared/config/i18next/i18next';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('В документе отсутствует корневой элемент для Приложения. Как правлио это div с классом "root"');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
