import { useTheme, ThemeList } from '@app/providers/theme-providers';
import { classNames } from '@shared/lib/classNames/classNames';
import { Button, ButtonType } from '@shared/ui';
import DarkIcon from '@shared/assets/icons/dark-icon.svg';
import LightIcon from '@shared/assets/icons/light-icon.svg';

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