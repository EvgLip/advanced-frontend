import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps
{
  className?: string;
}

export default function ProfilePage(props: ProfilePageProps)
{
  const { className } = props;
  const { t } = useTranslation('profile-page');

  return (
    <div className={classNames('', {}, [className])}>
      {t('Профиль')}
    </div>
  );
}