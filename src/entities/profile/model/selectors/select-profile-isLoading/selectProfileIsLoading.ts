import { StateSchema } from '@/app/providers/store-provider';

export default function selectProfileIsLoading(state: StateSchema)
{
  return state.profile?.isLoading;
}