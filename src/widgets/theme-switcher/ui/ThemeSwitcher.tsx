import { useTheme } from '@app/providers/ThemeProviders';
import { Theme } from '@app/providers/ThemeProviders';
import { classNames } from '@shared/lib/classNames/classNames';
import DarkIcon from '@shared/assets/icons/dark-icon.svg';
import LightIcon from '@shared/assets/icons/light-icon.svg';
import { Button, ButtonType } from '@shared/ui';

import * as classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps
{
  className?: string;
}

export default function ThemeSwitcher(props: ThemeSwitcherProps)
{
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(classes['theme-switcher'], {}, [className])}
      appearance={ButtonType.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK
        ? < DarkIcon className='theme-icon' />
        : <LightIcon className='theme-icon' />}
    </Button>
  );
}