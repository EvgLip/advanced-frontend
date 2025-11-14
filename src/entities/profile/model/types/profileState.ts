import { Profile } from './profile';

export interface ProfileState
{
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}