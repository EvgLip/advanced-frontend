import { useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
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
  const [isAuthOpenModal, setIsAuthOpenModal] = useState(false);
  const { t } = useTranslation('translation');

  const openModalHandler = () => setIsAuthOpenModal(true);
  const closeModalHanler = () => setIsAuthOpenModal(false);

  return (
    <nav className={classNames(styles.navbar, {}, ['navbar', className])}>
      <Button
        className={styles.links}
        appearance={ButtonType.OUTLINE}
        onClick={openModalHandler}
      >
        {t('войти')}
      </Button>

      <LoginModal
        isOpen={isAuthOpenModal}
        onClose={closeModalHanler}
      />
    </nav>
  );
}