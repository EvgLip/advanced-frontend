import { RouterProvider } from 'react-router-dom';
import { AppRouter } from '@/app/providers/router';
import './styles/index.scss';

import { classNames } from '@/shared/lib/classNames/classNames';


export default function App()
{

  return (
    <div className={classNames('app', { hovered: true, selected: false }, ['page'])}>
      <RouterProvider router={AppRouter} />
    </div>
  );
}