import { Profile, ValidateProfileErrorType } from './profile';

export interface ProfileState
{
  data?: Profile;
  formData?: Profile;
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateProfileErrorType[];
  readonly: boolean;
}