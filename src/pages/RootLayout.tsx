import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function RootLayout()
{

  return (
    <main>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <Outlet />
    </main>
  );
}