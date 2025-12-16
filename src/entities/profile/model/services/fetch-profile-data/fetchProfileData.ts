import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/store-provider';
import { Profile } from '../../types/profile';

const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>
  ('profile/fetchProfileData', async (_, thunkAPI) =>
  {
    const { extra, rejectWithValue } = thunkAPI;

    try
    {
      const response = await extra.api.get<Profile>('/profile');
      if (!response.data) throw new Error();
      return response.data;
    }
    catch (error)
    {
      console.log(error);
      return rejectWithValue('Во время получения данных возникла ошибка');
    }
  });

export default fetchProfileData;