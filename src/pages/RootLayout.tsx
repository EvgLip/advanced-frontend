import { Outlet } from 'react-router-dom';

import { Navbar } from '@widgets/navbar';
import { useTheme } from '@app/providers/ThemeProviders';

export default function RootLayout()
{
  const { theme, toggleTheme } = useTheme();

  return (
    <main>
      <Navbar />
      <button onClick={toggleTheme}>Тема</button>
      <Outlet />
    </main>
  );
}