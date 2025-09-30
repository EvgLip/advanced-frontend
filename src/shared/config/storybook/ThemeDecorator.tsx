import { ReactNode } from 'react';

import { Theme, ThemeProvider } from '@app/providers/ThemeProviders';
import '@app/styles/index.scss';

interface ThemeDecoratorProps
{
  children: ReactNode;
  theme: Theme;
}

function ThemeDecorator(props: ThemeDecoratorProps) 
{

  const { theme, children } = props;
  return (
    <ThemeProvider initialTheme={theme}>
      {children}
    </ThemeProvider>
  );

};

export default ThemeDecorator;

