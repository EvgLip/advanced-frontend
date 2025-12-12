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
  selectProfileReadonly,
  selectProfileValidateErrors
} from '@/entities/profile';
import ProfileCard from '@/entities/profile/ui/prifile-card/ProfileCard';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import ProfilePageHeader from './profile-page-header/ProfilePageHeader';
import { CurrencyType } from '@/entities/currency';
import { CountryType } from '@/entities/country';
import { Text, TextTheme } from '@/shared/ui';
import { ValidateProfileError } from '@/entities/profile/model/types/profile';

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
  const validateErrors = useAppSelector(selectProfileValidateErrors);

  const validateErrorTranslates =
  {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
    // [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
  };

  useEffect(function ()
  {
    if (__PROJECT__ !== 'storybook')
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
      dispatch(profileActions.updateProfile({ age: Number(value) }));
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

  const onChangeCurrency = useCallback(
    function (value?: CurrencyType)
    {
      dispatch(profileActions.updateProfile({ currency: value || undefined }));
    }, [dispatch]);

  const onChangeCountry = useCallback(
    function (value?: CountryType)
    {
      dispatch(profileActions.updateProfile({ country: value || undefined }));
    }, [dispatch]);

  return (

    <DinamicModuleLoader reducers={initialReducer} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />

        {validateErrors?.length && validateErrors.map(err => (
          <Text theme={TextTheme.ERROR} text={validateErrorTranslates[err]} key={err} />
        ))}

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
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DinamicModuleLoader>
  );
}