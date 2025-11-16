import { memo, useEffect, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from '@/shared/ui';

import styles from './Navbar.module.scss';
import { LoginModal } from '@/features/auth-by-username';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import { selectUserAuthData, userActions } from '@/entities/user';

interface NavbarProps
{
  className?: string;
}

const Navbar = memo(function Navbar({ className = '' }: NavbarProps)
{
  const [isAuthOpenModal, setIsAuthOpenModal] = useState(false);
  const authData = useAppSelector(selectUserAuthData);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('translation');

  useEffect(
    function ()
    {
      if (authData) closeModalLoginHanler();
    }, [authData]
  );

  const openModalLoginHandler = () => setIsAuthOpenModal(true);
  const closeModalLoginHanler = () => setIsAuthOpenModal(false);
  const logoutHandler = () => dispatch(userActions.logout());

  const login = (
    <>
      <Button
        className={styles.links}
        appearance={ButtonType.CLEAR}
        onClick={openModalLoginHandler}
      >
        {t('войти')}
      </Button>

      {
        isAuthOpenModal && <LoginModal
          isOpen={isAuthOpenModal}
          onClose={closeModalLoginHanler}
        />
      }
    </>
  );

  const logout = (
    <>
      <Button
        className={styles.links}
        appearance={ButtonType.CLEAR}
        onClick={logoutHandler}
      >
        {t('выйти')}
      </Button>
    </>
  );


  return (
    <nav className={classNames(styles.navbar, {}, ['navbar', className])}>
      {
        authData
          ? logout
          : login
      }
    </nav>
  );
});

export default Navbar;