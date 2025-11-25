import { useTheme, ThemeList } from '@/app/providers/theme-provider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonAppearance } from '@/shared/ui';
import DarkIcon from '@/shared/assets/icons/dark-icon.svg';
import LightIcon from '@/shared/assets/icons/light-icon.svg';
import { memo } from 'react';

interface ThemeSwitcherProps
{
  className?: string;
}

const ThemeSwitcher = memo(function ThemeSwitcher(props: ThemeSwitcherProps)
{
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      appearance={ButtonAppearance.CLEAR}
      onClick={toggleTheme}
    >
      {theme === ThemeList.DARK
        ? <DarkIcon className='theme-icon' />
        : <LightIcon className='theme-icon' />}
    </Button>
  );
});

export default ThemeSwitcher;