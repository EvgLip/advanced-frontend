import { classNames } from '@shared/lib/classNames/classNames';

import styles from './Navbar.module.scss';
import { Modal } from '@widgets/modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from '@shared/ui';
import { useState } from 'react';

interface NavbarProps
{
  className?: string;
}

export function Navbar({ className }: NavbarProps)
{
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation();

  const closeHanler = () => setIsAuthOpen(false);

  return (
    <nav className={classNames(styles.navbar, {}, ['navbar', className])}>
      <Button
        className={styles.links}
        appearance={ButtonType.OUTLINE}
        onClick={() => setIsAuthOpen(true)}
      >
        {t('Войти')}
      </Button>
      <Modal
        isOpen={isAuthOpen}
        onClose={closeHanler}
      >
        {'Форма входа/регистрации'}
      </Modal>
    </nav>
  );
}