import { ReactNode } from 'react';
import { StoreProvider } from '@/app/providers/store-proveder';

interface StoryDecoratorProps
{
  children: ReactNode;
}

export default function StoreDecorator(props: StoryDecoratorProps) 
{
  const { children } = props;

  return (
    <StoreProvider >
      {children}
    </StoreProvider >
  );
};