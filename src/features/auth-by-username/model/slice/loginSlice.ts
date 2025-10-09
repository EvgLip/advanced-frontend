import { createSlice, PayloadAction } from '../../../../../node_modules/@reduxjs/toolkit';

import { LoginState } from '../types/loginState';

const initialState: LoginState =
{
  username: '',
  password: '',
  isLoading: false,
  error: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>)
    {
      state.username = action.payload;
    },
    setPassword(state, action: PayloadAction<string>)
    {
      state.password = action.payload;
    }
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

console.log('loginSlice', loginSlice.reducer);