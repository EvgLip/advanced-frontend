import { configureStore, ReducersMapObject, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { counterReducer } from '@/entities/counter';
import { userReducer } from '@/entities/user';
import { createReducerManager } from './reducerManager';
import { StateShema, ThunckExtraArg } from './stateShema';
import { axiosApi } from '@/shared/api/api';

export function createReduxStore(
  initialState?: StateShema,
  asyncReducers?: ReducersMapObject<StateShema>,
  navigate?: NavigateFunction 
)
{
  const rootReducer: ReducersMapObject<StateShema> =
  {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunckExtraArg = 
  {
    api: axiosApi,
    navigate,
  };

  const store = configureStore(
    {
      reducer: reducerManager.reduce,
      preloadedState: initialState,
      devTools: __IS_DEV__,
      middleware: getDefaultMiddleware => getDefaultMiddleware(
        {
          thunk: { extraArgument: extraArg, }
        }
      )
    }
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;
// export type AppDispatch = AppStore['dispatch'];
export type AppDispatch = ThunkDispatch<
  StateShema,
  { api: typeof axiosApi; },
  UnknownAction
>;
