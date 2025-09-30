import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import '@app/styles/index.scss';

interface RouterDecoratorProps
{
  children: ReactNode;
}

export default function RouterDecorator(props: RouterDecoratorProps) 
{
  const { children } = props;

  return (
    <BrowserRouter >
      {children}
    </BrowserRouter >
  );
};

