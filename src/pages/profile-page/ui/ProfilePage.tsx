import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import DinamicModuleLoader, { ReducerList } from '@/shared/lib/components/dinamic-module-loader/DinamicModuleLoader';
import
{
  fetchProfileData,
  profileActions,
  profileReducer,
  selectProfileError,
  selectProfileFormData,
  selectProfileIsLoading,
  selectProfileReadonly
} from '@/entities/profile';
import ProfileCard from '@/entities/profile/ui/prifile-card/ProfileCard';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import ProfilePageHeader from './profile-page-header/ProfilePageHeader';

const initialReducer: ReducerList =
{
  profile: profileReducer,
};

interface ProfilePageProps
{
  className?: string;
}

export default function ProfilePage(props: ProfilePageProps)
{
  const { className } = props;
  const { t } = useTranslation('profile-page');
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectProfileFormData);
  const isLoading = useAppSelector(selectProfileIsLoading);
  const error = useAppSelector(selectProfileError);
  const readonly = useAppSelector(selectProfileReadonly);

  useEffect(function ()
  {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    function (value?: string)
    {
      dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

  const onChangeLastname = useCallback(
    function (value?: string)
    {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

  const onChangeAge = useCallback(
    function (value?: string)
    {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

  const onChangeCity = useCallback(
    function (value?: string)
    {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

  const onChangeUsername = useCallback(
    function (value?: string)
    {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

  const onChangeAvatar = useCallback(
    function (value?: string)
    {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

  return (

    <DinamicModuleLoader reducers={initialReducer} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={data}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          readonly={readonly}
        />
      </div>
    </DinamicModuleLoader>
  );
}