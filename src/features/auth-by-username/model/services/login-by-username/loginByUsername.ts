import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from '@/entities/user';
import i18n from '@/shared/config/i18next/i18next';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { ThunckExtraArg } from '@/app/providers/store-provider';

interface LoginByUsernameProps
{
  username: string;
  password: string;
}
const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { extra: ThunckExtraArg, rejectValue: string; }>(
  'login/loginByUsername',
  async (authData, { dispatch, extra, rejectWithValue }) =>
  {
    try
    {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) throw new Error();

      dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      return response.data;

    }
    catch (error) 
    {
      console.log(error);
      return rejectWithValue(i18n.t('неверный логин или пароль'));
    }
  },
);

export default loginByUsername;
