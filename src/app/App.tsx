import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';

import './styles/index.scss';
import RootLayout from 'pages/RootLayout';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProviders';


const router = createBrowserRouter(
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

export default function App()
{
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
      <button onClick={toggleTheme}>Тема</button>
      <RouterProvider router={router} />
    </div>
  );
}