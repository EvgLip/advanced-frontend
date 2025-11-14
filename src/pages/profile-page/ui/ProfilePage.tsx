import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import DinamicModuleLoader, { ReducerList } from '@/shared/lib/components/dinamic-module-loader/DinamicModuleLoader';
import { profileReducer } from '@/entities/profile';

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

  return (

    <DinamicModuleLoader reducers={initialReducer} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        {t('Профиль')}
      </div>
    </DinamicModuleLoader>
  );
}