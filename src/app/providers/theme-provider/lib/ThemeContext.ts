import { createContext } from 'react';

export const ThemeList =
  {
    LIGHT: 'app_light_theme',
    DARK: 'app-dark-theme',
  } as const;
export type Theme = (typeof ThemeList)[keyof typeof ThemeList];

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextProps
{
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {
    theme: ThemeList.LIGHT,
  });
