import { createSlice, PayloadAction } from '../../../../../node_modules/@reduxjs/toolkit';

import loginByUsername from '../services/login-by-username/loginByUsername';
import { LoginState } from '../types/loginState';

const initialState: LoginState =
{
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers:
  {
    setUserName(state, action: PayloadAction<string>)
    {
      state.username = action.payload;
    },
    setPassword(state, action: PayloadAction<string>)
    {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) =>
  {
    builder
      .addCase(loginByUsername.pending, (state) =>
      {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) =>
      {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) =>
      {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
