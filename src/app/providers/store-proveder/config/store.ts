import { combineReducers, configureStore } from '../../../../../node_modules/@reduxjs/toolkit';

import { counterReducer } from '@/entities/counter';
import { StateSheme } from './stateSheme';
import { userReducer } from '@/entities/user';

const rootReducer = combineReducers(
  {
    counter: counterReducer,
    user: userReducer,
  }
);


export function createReduxStore(initialState?: StateSheme)
{
  return configureStore<StateSheme>(
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