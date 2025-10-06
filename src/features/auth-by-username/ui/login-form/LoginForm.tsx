import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';

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
      <input type='text' />
      <input type='text' />
      <Button>
        {t('войти')}
      </Button>
    </form>
  );
}