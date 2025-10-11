import { memo, MouseEvent, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Input, Loader } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-proveder';

import { loginActions } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';
import { selectLoginState } from '../../model/selectors/selectLoginState/selectLoginState';
import loginByUsername from '../../model/services/login-by-username/loginByUsername';

interface LoginFormProps 
{
  className?: string;
}

const LoginForm = memo(function LoginForm(props: LoginFormProps)
{
  const { className } = props;

  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } = useAppSelector(selectLoginState);
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

  const loginHandler = useCallback(function (e: MouseEvent<HTMLButtonElement>)
  {
    e.preventDefault();
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <form className={classNames(classes.loginform, {}, [className])}>
      {error && <div>{error}</div>}
      <Input
        placeholder={t('имя пользователя')}
        autofocus
        onChange={onChangeUsername}
        value={username}
      />

      <Input
        placeholder={t('пароль')}
        onChange={onChangePassword}
        value={password}
      />

      <Button
        className={classes.loginbtn}
        onClick={loginHandler}
        disabled={isLoading}
      >
        {t('войти')}
      </Button>
    </form>
  );
});

export default LoginForm;