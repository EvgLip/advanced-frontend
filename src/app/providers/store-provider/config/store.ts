import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { counterReducer } from '@/entities/counter';
import { userReducer } from '@/entities/user';
import { createReducerManager } from './reducerManager';
import { RootState } from './rootState';


export function createReduxStore(
  initialState?: RootState,
  asyncReducers?: ReducersMapObject<RootState>
)
{
  const roorReducer: ReducersMapObject<RootState> =
  {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(roorReducer);

  const store = configureStore<RootState>
    (
      {
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        devTools: __IS_DEV__,
      }
    );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
