import { memo, MouseEvent, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-proveder';

import { loginActions } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';
import { selectLoginState } from '../../model/selectors/selectLoginState/selectLoginState';

interface LoginFormProps 
{
  className?: string;
}

const LoginForm = memo(function LoginForm(props: LoginFormProps)
{
  const { className } = props;

  const dispatch = useAppDispatch();
  const login = useAppSelector(selectLoginState);
  const { t } = useTranslation();

  const onChangeUsername = useCallback(
    function (value: string)
    {
      dispatch(loginActions.setUserName(value));
    }, [dispatch]
  );

  const onChangePassword = useCallback(
    function (value: string)
    {
      dispatch(loginActions.setPassword(value));
    }, [dispatch]
  );

  function loginHandler(e: MouseEvent<HTMLButtonElement>)
  {
    e.preventDefault();
  };

  return (
    <form className={classNames(classes.loginform, {}, [className])}>
      <Input
        placeholder={t('имя пользователя')}
        autofocus
        onChange={onChangeUsername}
      />

      <Input
        placeholder={t('пароль')}
        onChange={onChangePassword}
      />

      <Button
        className={classes.loginbtn}
        onClick={loginHandler}
      >
        {t('войти')}
      </Button>
    </form>
  );
});

export default LoginForm;