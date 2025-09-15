import { useTheme } from '@app/providers/ThemeProviders';
import { ThemeList } from '@app/providers/ThemeProviders';
import { classNames } from '@shared/lib/classNames/classNames';
import DarkIcon from '@shared/assets/icons/dark-icon.svg';
import LightIcon from '@shared/assets/icons/light-icon.svg';
import { Button, ButtonType } from '@shared/ui';

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
      className={classNames('', {}, [className])}
      appearance={ButtonType.CLEAR}
      onClick={toggleTheme}
    >
      {theme === ThemeList.DARK
        ? <DarkIcon className='theme-icon' />
        : <LightIcon className='theme-icon' />}
    </Button>
  );
}