import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonType } from '@/shared/ui';
import classes from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps
{
  className?: string;
  short?: boolean;
}

export default function LanguageSwitcher(props: LanguageSwitcherProps)
{
  const { className, short } = props;
  const { t, i18n } = useTranslation('translation');
  const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    // <button>Bnt</button>
    <Button
      className={classNames(classes.languageswitcher, {}, [className])}
      appearance={ButtonType.CLEAR}
      onClick={toggle}
    >

      {t(short ? 'сокращенный язык' : 'язык')}
    </Button>
  );
}