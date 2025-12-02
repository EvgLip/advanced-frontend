import { Outlet } from 'react-router-dom';

import { useAppSelector } from '@/app/providers/store-provider';
import { selectUserAuthData } from '@/entities/user';


export default function ProtectedRoute()
{
  const isAuth = useAppSelector(selectUserAuthData);

  if (!isAuth) return null;

  return (
    <Outlet />
  );
}