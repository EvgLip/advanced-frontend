import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { createSlice, PayloadAction } from '../../../../../node_modules/@reduxjs/toolkit';

import { UserState, User } from '../type/userState';

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>)
    {
      state.authData = action.payload;
    },
    initAuthData(state)
    {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user)
        state.authData = JSON.parse(user);
    },
    logout(state)
    {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    }
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;