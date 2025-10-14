import { RouterProvider } from 'react-router-dom';
import { AppRouter } from '@/app/providers/router';

import { classNames } from '@/shared/lib/classNames/classNames';

import './styles/index.scss';
import { useTheme } from './providers/theme-provider';
import { useAppDispatch } from '@/app/providers/store-provider';
import { useEffect } from 'react';
import { userActions } from '@/entities/user';


export default function App()
{
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(
    function ()
    {
      dispatch(userActions.initAuthData());
    }, [dispatch]
  );

  return (
    <div className={classNames('app', { hovered: true, selected: false }, ['page'])}>
      <RouterProvider router={AppRouter} />
    </div>
  );
}