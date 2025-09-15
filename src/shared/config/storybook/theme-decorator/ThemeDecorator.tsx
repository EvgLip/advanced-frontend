import { ReactNode } from 'react';

import { Theme } from '@app/providers/ThemeProviders';
import '@app/styles/index.scss';

interface ThemeDecoratorProps
{
  children: ReactNode;
  theme: Theme;
}

function ThemeDecorator(props: ThemeDecoratorProps) 
{
  const { children, theme } = props;

  return (
    <div className={`app ${theme}`}>
      {children}
    </div >
  );

};

export default ThemeDecorator;

