import { combineReducers, configureStore } from '../../../../../node_modules/@reduxjs/toolkit';

import { counterReducer } from '@/entities/counter';
import { IStateSheme } from './stateSheme';

const rootReducer = combineReducers(
  {
    counter: counterReducer,
  }
);


export function createReduxStore(initialState?: IStateSheme)
{
  return configureStore<IStateSheme>(
    {
      reducer: rootReducer,
      preloadedState: initialState,
      devTools: __IS_DEV__,
    }
  );
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];