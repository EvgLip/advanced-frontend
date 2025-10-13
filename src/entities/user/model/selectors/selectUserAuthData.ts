import { RootState } from '@/app/providers/store-proveder';

export default function selectUserAuthData(state: RootState)
{
  return state.user.authData;
}