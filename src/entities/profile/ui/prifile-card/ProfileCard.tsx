import { useAppSelector } from '@/app/providers/store-provider';
import { useTranslation } from 'react-i18next';

import selectProfileData from '../../model/selectors/select-profile-data/selectProfileData';
import selectProfileIsLoading from '../../model/selectors/select-profile-isLoading/selectProfileIsLoading';
import selectProfileError from '../../model/selectors/select-profile-error/selectProfileError';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './ProfileCard.module.scss';
import { Heading, HeadingLevel } from '@/shared/ui/heading/Heading';
import { Button, ButtonType } from '@/shared/ui';


interface ProfileCardProps
{
  className?: string;
}

export default function ProfileCard(props: ProfileCardProps)
{
  const { className } = props;
  const { t } = useTranslation('profile-card');
  const data = useAppSelector(selectProfileData);
  const isLoading = useAppSelector(selectProfileIsLoading);
  const error = useAppSelector(selectProfileError);

  return (
    <article className={classNames(classes['profile-card'], {}, [className])}>
      <div>
        <Heading As={HeadingLevel.H2}>{t('Профиль')}</Heading>
        <Button appearance={ButtonType.OUTLINE}>{t('Редактировать')}</Button>
      </div>
    </article>
  );
}