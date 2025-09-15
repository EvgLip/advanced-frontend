import { ReactNode } from 'react';

import '@app/styles/themes/dark.scss';
import '@app/styles/themes/light.scss';
import '@app/styles/variables/globall.scss';


interface StyleDecoratorProps
{
  children: ReactNode;
}

function StyleDecorator(props: StyleDecoratorProps)
{
  const { children } = props;

  return (
    <div className='decorator'>
      {children}
    </div>
  );
}

export default StyleDecorator;