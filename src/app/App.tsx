import { RouterProvider } from 'react-router-dom';
import { AppRouter } from '@app/providers/router';

import { classNames } from '@shared/lib/classNames/classNames';

import './styles/index.scss';
import { useTheme } from './providers/ThemeProviders';


export default function App()
{
  const { theme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
      <RouterProvider router={AppRouter} />
    </div>
  );
}