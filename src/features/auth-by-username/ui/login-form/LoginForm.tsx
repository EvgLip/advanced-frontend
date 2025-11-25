import { memo, MouseEvent, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, Input, Text, TextTheme } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';

import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';
import loginByUsername from '../../model/services/login-by-username/loginByUsername';
import { selectLoginUsername } from '../../model/selectors/select-login-username/selectLoginUsername';
import { selectLoginPassword } from '../../model/selectors/select-login-password/selectLoginPassword';
import { selectLoginLoading } from '../../model/selectors/select-login-loading/selectLoginLoading';
import { selectLoginError } from '../../model/selectors/select-login-error/selectLoginError';
import DinamicModuleLoader, { ReducerList } from '@/shared/lib/components/dinamic-module-loader/DinamicModuleLoader';

export interface LoginFormProps 
{
  className?: string;
}

const initialReducer: ReducerList =
{
  login: loginReducer,
};

const LoginForm = memo(function LoginForm(props: LoginFormProps)
{
  const { className } = props;

  const dispatch = useAppDispatch();
  const username = useAppSelector(selectLoginUsername);
  const password = useAppSelector(selectLoginPassword);
  const isLoading = useAppSelector(selectLoginLoading);
  const error = useAppSelector(selectLoginError);
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

  const loginHandler = useCallback(async function (e: MouseEvent<HTMLButtonElement>)
  {
    e.preventDefault();
    await dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DinamicModuleLoader reducers={initialReducer} removeAfterUnmount>
      <form className={classNames(classes.loginform, {}, [className])}>
        <Text
          title={t('форма авторизации')}
        />
        <Input
          placeholder={t('имя пользователя')}
          autofocus
          onChange={onChangeUsername}
          value={username}
          readonly={false}
        />

        <Input
          placeholder={t('пароль')}
          onChange={onChangePassword}
          value={password}
          readonly={false}
        />

        <div className={classes.controls}>
          {error &&
            <Text
              text={error}
              theme={TextTheme.ERROR}
            />
          }
          <Button
            className={classes.loginbtn}
            onClick={loginHandler}
            disabled={isLoading}
          >
            {t('войти')}
          </Button>
        </div>

      </form>
    </DinamicModuleLoader>
  );
});

export default LoginForm;