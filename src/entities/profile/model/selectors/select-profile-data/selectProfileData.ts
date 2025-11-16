import { StateShema } from '@/app/providers/store-provider';

export default function selectProfileData(state: StateShema)
{
  return state.profile?.data;
}