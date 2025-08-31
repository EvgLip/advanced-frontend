import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { MainPage } from '@pages/main-page';
import { AboutPage } from '@pages/about-page';

import RootLayout from '@pages/RootLayout';
import { NotFoundPage } from '@pages/NotFoundPage';
import { LoaderPage } from '@widgets/loader-page';


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
              <Suspense fallback={<LoaderPage />}>
                <MainPage />
              </Suspense>
          },
          {
            path: '/about',
            element:
              <Suspense fallback={<LoaderPage />}>
                <AboutPage />
              </Suspense>
          },
          {
            path: '*',
            element: <NotFoundPage />
            // element: <LoaderPage />

          }
        ]
    },

  ]
);