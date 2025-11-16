import { StateShema } from '@/app/providers/store-provider';

export default function selectProfileIsLoading(state: StateShema)
{
  return state.profile?.isLoading;
}