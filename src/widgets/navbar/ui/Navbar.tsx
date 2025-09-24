import { classNames } from '@shared/lib/classNames/classNames';

import styles from './Navbar.module.scss';

interface NavbarProps
{
  className?: string;
}

export function Navbar({ className }: NavbarProps)
{

  return (
    <nav className={classNames(styles.navbar, {}, ['navbar', className])}>
      <div className={styles.links}>
        /
      </div>
    </nav>
  );
}