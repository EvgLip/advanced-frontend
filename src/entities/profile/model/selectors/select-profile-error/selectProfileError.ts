import { StateShema } from '@/app/providers/store-provider';

export default function (state: StateShema)
{
  return state.profile?.error;
}