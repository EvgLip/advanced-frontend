import { StateSchema } from '@/app/providers/store-provider';

export default function selectProfileReadonly(state: StateSchema)
{
  return state.profile?.readonly;
}