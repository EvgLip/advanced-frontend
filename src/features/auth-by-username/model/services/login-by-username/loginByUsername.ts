import { User } from '@/entities/user';
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
      return response.data;
    }
    catch (error) 
    {
      console.log(error);
      return thunkAPI.rejectWithValue('Ошибка');
    }
  },
);

export default loginByUsername;
