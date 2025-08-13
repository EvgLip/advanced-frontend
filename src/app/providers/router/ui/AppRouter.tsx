import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { MainPage } from '@pages/main-page';
import { AboutPage } from '@pages/about-page';

import RootLayout from '@pages/RootLayout';


export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children:
        [
          {
            index: true,
            element:
              <Suspense fallback={<p>Загрузка...</p>}>
                <MainPage />
              </Suspense>
          },
          {
            path: '/about',
            element:
              <Suspense fallback={<p>Загрузка...</p>}>
                <AboutPage />
              </Suspense>
          }
        ]
    },

  ]
);