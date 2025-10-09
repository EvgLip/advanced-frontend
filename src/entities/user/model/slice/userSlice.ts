import { createSlice } from '../../../../../node_modules/@reduxjs/toolkit';

import { UserState } from '../type/userState';

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;