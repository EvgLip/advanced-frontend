import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import '@app/styles/index.scss';
import { Theme } from '@app/providers/ThemeProviders';

interface RouterDecoratorProps
{
  children: ReactNode;
  theme: Theme;
}

export default function RouterDecorator(props: RouterDecoratorProps) 
{
  const { children, theme } = props;

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter >
        {children}
      </BrowserRouter >
    </div>
  );
};

