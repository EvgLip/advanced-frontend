import { createSlice } from '@reduxjs/toolkit';

import { ProfileState } from '../types/profileState';

const initialState: ProfileState =
{
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;