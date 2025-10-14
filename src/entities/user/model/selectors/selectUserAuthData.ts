import { RootState } from '@/app/providers/store-provider';

export default function selectUserAuthData(state: RootState)
{
  return state.user.authData;
}