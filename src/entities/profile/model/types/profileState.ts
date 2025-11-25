import { Profile } from './profile';

export interface ProfileState
{
  data?: Profile;
  formData?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}