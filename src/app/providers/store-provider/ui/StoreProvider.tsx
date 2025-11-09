import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { RootState } from '../config/rootState';

interface StoreProviderProps
{
  children: ReactNode;
  initialState?: DeepPartial<RootState>;
}

export default function StoreProvider(props: StoreProviderProps)
{
  const { children, initialState } = props;

  const store = createReduxStore(initialState as RootState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}