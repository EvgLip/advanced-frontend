//почему то не работает импорт
//он разрешается в 
// import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/counter';
import { configureStore } from '../../../../../node_modules/@reduxjs/toolkit';

import { IStateSheme } from './stateSheme';


export function createReduxStore(initialState?: IStateSheme)
{
  return configureStore<IStateSheme>(
    {
      reducer:
      {
        counter: counterReducer,
      },
      devTools: __IS_DEV__,
    }
  );
}

export const store = configureStore<IStateSheme>(
  {
    reducer:
    {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
  }
);

//Выведим типы "rootState" и "AppDispatch" из самого хранилища
export type RootState = ReturnType<typeof store.getState>;
//Предполагаемый тип:
export type AppDispatch = typeof store.dispatch;