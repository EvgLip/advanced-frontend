import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import DinamicModuleLoader, { ReducerList } from '@/shared/lib/components/dinamic-module-loader/DinamicModuleLoader';
import
{
  fetchProfileData,
  profileReducer,
  selectProfileData,
  selectProfileError,
  selectProfileIsLoading
} from '@/entities/profile';
import ProfileCard from '@/entities/profile/ui/prifile-card/ProfileCard';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';

const initialReducer: ReducerList =
{
  profile: profileReducer,
}
  ;
interface ProfilePageProps
{
  className?: string;
}

export default function ProfilePage(props: ProfilePageProps)
{
  const { className } = props;
  const { t } = useTranslation('profile-page');
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectProfileData);
  const isLoading = useAppSelector(selectProfileIsLoading);
  const error = useAppSelector(selectProfileError);

  useEffect(function ()
  {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (

    <DinamicModuleLoader reducers={initialReducer} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard
          data={data}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </DinamicModuleLoader>
  );
}