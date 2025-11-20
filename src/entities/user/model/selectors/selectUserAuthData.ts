import { StateSchema } from '@/app/providers/store-provider';

export default function selectUserAuthData(state: StateSchema)
{
  return state.user.authData;
}