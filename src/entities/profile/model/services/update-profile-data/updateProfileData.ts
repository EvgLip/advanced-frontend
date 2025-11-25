import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '@/shared/config/i18next/i18next';
import { ThunkConfig } from '@/app/providers/store-provider';

import selectProfileFormData from '../../selectors/select-profile-form-data/selectProfileFormData';
import { Profile } from '../../types/profile';

const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async function (_, thunkApi)
  {
    const { extra, getState, rejectWithValue } = thunkApi;

    const formData = selectProfileFormData(getState());

    try
    {
      const response = await extra.api.put<Profile>('/profile', formData);

      if (!response.data) throw new Error();

      return response.data;
    }
    catch (error) 
    {
      console.log(error);
      return rejectWithValue(i18n.t('Данные не сохранены'));
    }
  }
);

export default updateProfileData;
