import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { RootState } from '../config/rootState';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps
{
  children: ReactNode;
  initialState?: DeepPartial<RootState>;
  asyncReducers?: DeepPartial<ReducersMapObject<RootState>>;
}

export default function StoreProvider(props: StoreProviderProps)
{
  const {
    children,
    initialState,
    asyncReducers,
  } = props;

  const store = createReduxStore(
    initialState as RootState,
    asyncReducers as ReducersMapObject<RootState>
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}