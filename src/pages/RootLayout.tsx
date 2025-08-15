import { Outlet } from 'react-router-dom';

import { Navbar } from '@widgets/navbar';

export default function RootLayout()
{

  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}