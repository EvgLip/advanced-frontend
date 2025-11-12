import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/about-page';
import { MainPage } from '@/pages/main-page';



export const AppRoutes =
  {
    MAIN: 'main',
    ABOUT: 'about',
    PROFILE: 'profile'
  } as const;

type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<AppRoutesType, string> =
{
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
};


