import { classNames } from '@shared/lib/classNames/classNames';

import * as styles from './Navbar.module.scss';
import { AppLink } from '@shared/ui';

interface NavbarProps
{
  className?: string;
}

export function Navbar({ className }: NavbarProps)
{

  return (
    <nav className={classNames(styles.navbar, {}, ['navbar', className])}>
      <div className={styles.links}>
        <AppLink to='/'>Главная</AppLink>
        <AppLink to='/about'>О сайте</AppLink>
      </div>
    </nav>
  );
}
