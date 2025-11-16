import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeList } from './ThemeContext';

interface UseThemeResult
{
  toggleTheme: () => void;
  theme?: Theme;
}


export default function useTheme(): UseThemeResult
{
  const context = useContext(ThemeContext);

  //проверка на то, что компоненты обернуты в Provider
  if (context === undefined)
    throw new Error('Попытка доступа к контексту Theme вне ThemeProvider');

  const { theme, setTheme } = context;

  function toggleTheme() 
  {
    const newTheme = context.theme === ThemeList.DARK ? ThemeList.LIGHT : ThemeList.DARK;
    setTheme!(newTheme);
    //сохраняем тему в localStorage
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  // подменяем context.setTheme на toggleTheme
  return {
    theme,
    toggleTheme,
  };

}