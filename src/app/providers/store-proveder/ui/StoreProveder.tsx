import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { IStateSheme } from '../config/stateSheme';

interface StoreProviderProps
{
  children: ReactNode;
  initialState?: IStateSheme;
}

export default function StoreProvider(props: StoreProviderProps)
{
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}