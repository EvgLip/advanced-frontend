import { ReactNode } from 'react';
import { StateShema, StoreProvider } from '@/app/providers/store-provider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from '@/features/auth-by-username/model/slice/loginSlice';
import { profileReducer } from '@/entities/profile';

interface StoryDecoratorProps
{
  children: ReactNode;
  initialState?: DeepPartial<StateShema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>;
}

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateShema>> =
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