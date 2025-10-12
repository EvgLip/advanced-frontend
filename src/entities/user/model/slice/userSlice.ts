import { createSlice, PayloadAction } from '../../../../../node_modules/@reduxjs/toolkit';

import { UserState, User } from '../type/userState';

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>)
    {
      console.log('action.payload', action.payload);
      console.log('state.authData', state.authData);
      state.authData = action.payload;
      console.log('state.authData', state.authData);
    }
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;