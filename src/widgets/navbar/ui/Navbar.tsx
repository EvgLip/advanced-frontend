import { classNames } from '@shared/lib/classNames/classNames';

import { AppLink } from '@shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps
{
  className?: string;
}

export function Navbar({ className }: NavbarProps)
{
  const { t } = useTranslation('main-page');
  const { t: t2 } = useTranslation('about');

  console.log('styles', styles.navbar);

  return (
    <nav className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to='/'>{t('Главная')}</AppLink>
        <AppLink to='/about'>{t2('О сайте')}</AppLink>
      </div>
    </nav>
  );
}