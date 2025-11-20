import { StateSchema } from '@/app/providers/store-provider';

export default function (state: StateSchema)
{
  return state.profile?.error;
}