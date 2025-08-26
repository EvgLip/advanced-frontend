import { Outlet } from 'react-router-dom';

import { Navbar } from '@widgets/navbar';
import { Sidebar } from '@widgets/sidebar';

export default function RootLayout()
{

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
