import { useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from '@/shared/ui';

import styles from './Navbar.module.scss';
import { LoginModal } from '@/features/auth-by-username';

interface NavbarProps
{
  className?: string;
}

export function Navbar({ className }: NavbarProps)
{
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation('translation');

  const closeHanler = () => setIsAuthOpen(false);

  return (
    <nav className={classNames(styles.navbar, {}, ['navbar', className])}>
      <Button
        className={styles.links}
        appearance={ButtonType.OUTLINE}
        onClick={() => setIsAuthOpen(true)}
      >
        {t('войти')}
      </Button>

      <LoginModal
        isOpen={isAuthOpen}
        onClose={closeHanler}
      />
    </nav>
  );
}