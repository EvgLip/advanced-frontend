import { ReactNode } from 'react';
import { RootState, StoreProvider } from '@/app/providers/store-provider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from '@/features/auth-by-username/model/slice/loginSlice';
import { profileReducer } from '@/entities/profile';

interface StoryDecoratorProps
{
  children: ReactNode;
  initialState?: DeepPartial<RootState>;
  asyncReducers?: DeepPartial<ReducersMapObject<RootState>>;
}

const defaultAsyncReducer: DeepPartial<ReducersMapObject<RootState>> =
{
  login: loginReducer,
  profile: profileReducer,
};

export default function StoreDecorator(props: StoryDecoratorProps)
{
  const {
    children,
    initialState,
    asyncReducers,
  } = props;

  return (
    <StoreProvider
      initialState={initialState}
      asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}
    >
      {children}
    </StoreProvider >
  );
};