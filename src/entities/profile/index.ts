import { Profile } from './model/types/profile';
import { ProfileState } from './model/types/profileState';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import fetchProfileData from './model/services/fetch-profile-data/fetchProfileData';
import updateProfileData from './model/services/update-profile-data/updateProfileData';
import ProfileCard from './ui/prifile-card/ProfileCard';
import selectProfileData from './model/selectors/select-profile-data/selectProfileData';
import selectProfileFormData from './model/selectors/select-profile-form-data/selectProfileFormData';
import selectProfileIsLoading from './model/selectors/select-profile-isLoading/selectProfileIsLoading';
import selectProfileError from './model/selectors/select-profile-error/selectProfileError';
import selectProfileReadonly from './model/selectors/select-profile-readonly/selectProfileReadonly';
import selectProfileValidateErrors from './model/selectors/select-profile-validate-errors/selectProfileValidateErrors';
import { validateProfileData } from './model/services/validateProfileData/validateProfileData';


export
{
  Profile,
  ProfileState,
  profileReducer,
  profileActions,
  fetchProfileData,
  updateProfileData,
  ProfileCard,
  selectProfileData,
  selectProfileFormData,
  selectProfileIsLoading,
  selectProfileError,
  selectProfileReadonly,
  validateProfileData,
  selectProfileValidateErrors,
};