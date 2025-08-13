import { RouterProvider } from 'react-router-dom';
import { AppRouter } from '@app/providers/router';

import { classNames } from '@shared/lib/classNames/classNames';
import { useTheme } from '@app/providers/ThemeProviders';

import './styles/index.scss';


export default function App()
{
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
      <button onClick={toggleTheme}>Тема</button>

      <RouterProvider router={AppRouter} />
    </div>
  );
}