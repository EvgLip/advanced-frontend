import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { StateSheme } from '../config/stateSheme';

interface StoreProviderProps
{
  children: ReactNode;
  initialState?: DeepPartial<StateSheme>;
}

export default function StoreProvider(props: StoreProviderProps)
{
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSheme);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}