import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { MainPage } from '@/pages/main-page';
import { AboutPage } from '@/pages/about-page';
import { ProfilePage } from '@/pages/profile-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { LoaderPage } from '@/widgets/loader-page';

import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import ProviderTree from '@/app/ProviderTree';


export const router = createBrowserRouter(
  [
    {
      path: RoutePath.main, //'/'
      element: <ProviderTree />,
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
            path: RoutePath.about, //'/about',
            element:
              <Suspense fallback={<LoaderPage />}>
                <AboutPage />
              </Suspense>
          },
          {
            path: RoutePath.profile, //'/profile',
            element:
              <Suspense fallback={<LoaderPage />}>
                <ProfilePage />
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