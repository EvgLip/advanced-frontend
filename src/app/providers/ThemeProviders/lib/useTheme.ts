import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult
{
  toggleTheme: () => void;
  theme: Theme;
}

export default function useTheme(): UseThemeResult
{
  const context = useContext(ThemeContext);

  //проверка на то, что компоненты обернуты в Provider
  if (context === undefined)
    throw new Error('Попытка доступа к контексту Theme вне ThemeProvider');

  const toggleTheme = () =>
  {
    const newTheme = context.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    context.setTheme(newTheme);
    //сохраняем тему в localStorage
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: context.theme,
    toggleTheme,
  };
}