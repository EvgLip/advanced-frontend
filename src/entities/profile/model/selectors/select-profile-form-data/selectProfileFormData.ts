import { StateSchema } from '@/app/providers/store-provider';

export default function selectProfileFormData(state: StateSchema)
{
  return state.profile?.formData;
}