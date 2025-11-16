import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { StateShema } from '../config/stateShema';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps
{
  children: ReactNode;
  initialState?: DeepPartial<StateShema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>;
}

export default function StoreProvider(props: StoreProviderProps)
{
  const {
    children,
    initialState,
    asyncReducers,
  } = props;

  const store = createReduxStore(
    initialState as StateShema,
    asyncReducers as ReducersMapObject<StateShema>
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}