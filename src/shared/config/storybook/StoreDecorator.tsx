import { ReactNode } from 'react';
import { StateSchema, StoreProvider } from '@/app/providers/store-provider';
import { loginReducer } from '@/features/auth-by-username/model/slice/loginSlice';
import { profileReducer } from '@/entities/profile';
import { ReducerList } from '@/shared/lib/components/dinamic-module-loader/DinamicModuleLoader';

interface StoryDecoratorProps
{
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducerList;
}

const defaultAsyncReducer: ReducerList =
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