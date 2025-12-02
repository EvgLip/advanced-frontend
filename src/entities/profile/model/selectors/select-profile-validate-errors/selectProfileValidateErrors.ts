import { StateSchema } from '@/app/providers/store-provider';

export default function selectProfileValidateErrors(state: StateSchema)
{
  return state.profile?.validateErrors;
}