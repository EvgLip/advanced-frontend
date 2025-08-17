import { useTranslation } from 'react-i18next';

import * as classes from './LanguageSwitcher.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { Button, ButtonType } from '@shared/ui';

interface LanguageSwitcherProps
{
  className?: string;
}

export default function LanguageSwitcher(props: LanguageSwitcherProps)
{
  const { className } = props;
  const { t, i18n } = useTranslation('translation');
  const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    // <button>Bnt</button>
    <Button
      className={classNames(classes['language-switcher'], {}, [className])}
      appearance={ButtonType.CLEAR}
      onClick={toggle}
    >
      {t('язык')}
    </Button>
  );
}