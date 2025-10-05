//почему то не работает импорт
//он разрешается в 
// import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/counter';
import { combineReducers, configureStore } from '../../../../../node_modules/@reduxjs/toolkit';

import { IStateSheme } from './stateSheme';

const rootReducer = combineReducers(
  {
    counter: counterReducer
  }
);


export function createReduxStore(initialState?: IStateSheme)
{
  return configureStore<IStateSheme>(
    {
      reducer: rootReducer,
      devTools: __IS_DEV__,
    }
  );
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];