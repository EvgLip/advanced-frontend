import { combineReducers, configureStore } from '../../../../../node_modules/@reduxjs/toolkit';

import { counterReducer } from '@/entities/counter';
import { userReducer } from '@/entities/user';
// import { loginReducer } from '@/features/auth-by-username';
import { loginReducer } from '../../../../features/auth-by-username/model/slice/loginSlice';

const rootReducer = combineReducers(
  {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
  }
);


export function createReduxStore(initialState?: RootState)
{
  return configureStore<RootState>(
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