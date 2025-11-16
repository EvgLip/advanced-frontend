import { StateShema } from '@/app/providers/store-provider';

export default function selectUserAuthData(state: StateShema)
{
  return state.user.authData;
}