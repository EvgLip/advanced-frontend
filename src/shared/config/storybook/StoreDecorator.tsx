import { ReactNode } from 'react';
import { RootState, StoreProvider } from '@/app/providers/store-proveder';

interface StoryDecoratorProps
{
  children: ReactNode;
  initialState?: DeepPartial<RootState>;
}

export default function StoreDecorator(props: StoryDecoratorProps)
{
  const { children, initialState } = props;

  return (
    <StoreProvider initialState={initialState}>
      {children}
    </StoreProvider >
  );
};