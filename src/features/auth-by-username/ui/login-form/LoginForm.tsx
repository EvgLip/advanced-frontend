import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '@/shared/ui';

import classes from './LoginForm.module.scss';

interface LoginFormProps 
{
  className?: string;
}

export default function LoginForm(props: LoginFormProps)
{
  const { className } = props;

  const { t } = useTranslation();

  return (
    <form className={classNames(classes.loginform, {}, [className])}>
      <Input
        placeholder={t('имя пользователя')}
        autofocus
      />

      <Input
        placeholder={t('пароль')}
      />

      <Button className={classes.loginbtn}>
        {t('войти')}
      </Button>
    </form>
  );
}