import { Profile } from './model/types/profile';
import { ProfileState } from './model/types/profileState';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import fetchProfileData from './model/services/fetchProfileData';
import ProfileCard from './ui/prifile-card/ProfileCard';
import selectProfileData from './model/selectors/select-profile-data/selectProfileData';
import selectProfileError from './model/selectors/select-profile-error/selectProfileError';
import selectProfileIsLoading from './model/selectors/select-profile-isLoading/selectProfileIsLoading';


export
{
  Profile,
  ProfileState,
  profileReducer,
  profileActions,
  fetchProfileData,
  ProfileCard,
  selectProfileData,
  selectProfileError,
  selectProfileIsLoading
};