import { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from '../lib/ThemeContext';

//тема по умолчанию
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps
{
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps)
{
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const contextValues: ThemeContextProps = useMemo(
    () => (
      {
        theme,
        setTheme,
      }), [theme]
  );

  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
}