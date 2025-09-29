import { ReactNode, useMemo, useState } from 'react';
import
{
  LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps, ThemeList
} from '../lib/ThemeContext';

//тема по умолчанию
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || ThemeList.LIGHT;

interface ThemeProviderProps
{
  children: ReactNode;
  initialTheme?: Theme;
}

export default function ThemeProvider(props: ThemeProviderProps)
{
  const { children, initialTheme } = props;
  //или тема переданная через props или по умолчанию из localStorage 
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const contextValues: ThemeContextProps = useMemo(
    () => (
      {
        theme,
        setTheme,
      }), [theme]
  );

  return (
    <ThemeContext value={contextValues}>
      {children}
    </ThemeContext>
  );
}