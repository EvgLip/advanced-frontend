import { User, userActions } from '@/entities/user';
import i18n from '@/shared/config/i18next/i18next';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginByUsernameProps
{
  username: string;
  password: string;
}
const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string; }>(
  'login/loginByUsername',
  async (authData, thunkAPI) =>
  {
    try
    {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) throw new Error();

      thunkAPI.dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      return response.data;

    }
    catch (error) 
    {
      console.log(error);
      return thunkAPI.rejectWithValue(i18n.t('неверный логин или пароль'));
    }
  },
);

export default loginByUsername;
