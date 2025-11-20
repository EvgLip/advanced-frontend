import { StateSchema } from '@/app/providers/store-provider';

export default function selectProfileData(state: StateSchema)
{
  return state.profile?.data;
}