import { ReactNode } from 'react';

import '@/app/styles/index.scss';

interface StyleDecoratorProps
{
  children: ReactNode;
}

function StyleDecorator(props: StyleDecoratorProps)
{
  const { children } = props;

  return (
    <div className='app' >
      {children}
    </div>
  );
}

export default StyleDecorator;