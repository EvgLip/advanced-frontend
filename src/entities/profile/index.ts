import { Profile } from './model/types/profile';
import { ProfileState } from './model/types/profileState';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import fetchProfileData from './model/services/fetchProfileData';
import ProfileCard from './ui/prifile-card/ProfileCard';


export
{
  Profile,
  ProfileState,
  profileReducer,
  profileActions,
  fetchProfileData,
  ProfileCard,
};