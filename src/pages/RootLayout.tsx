import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { useAppDispatch } from '@/app/providers/store-provider';
import { userActions } from '@/entities/user';

export default function RootLayout()
{
  const dispatch = useAppDispatch();

  useEffect(
    function ()
    {
      dispatch(userActions.initAuthData());
    }, [dispatch]
  );

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className='main'>
        <Outlet />
      </main>
    </>
  );
}
