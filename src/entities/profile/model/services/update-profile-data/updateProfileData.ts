import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '@/shared/config/i18next/i18next';
import { ThunkConfig } from '@/app/providers/store-provider';

import selectProfileFormData from '../../selectors/select-profile-form-data/selectProfileFormData';
import { Profile, ValidateProfileError, ValidateProfileErrorType } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrorType[]>>(
  'profile/updateProfileData',
  async function (_, thunkApi)
  {
    const { extra, getState, rejectWithValue } = thunkApi;

    const formData = selectProfileFormData(getState());
    const errors = validateProfileData(formData);

    if (errors.length)
      return rejectWithValue(errors);

    try
    {
      const response = await extra.api.put<Profile>('/profile', formData);

      if (!response.data) throw new Error();

      return response.data;
    }
    catch (error) 
    {
      console.log(error);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
);

export default updateProfileData;
