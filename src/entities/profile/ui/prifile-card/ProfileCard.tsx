import { useAppSelector } from '@/app/providers/store-provider';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Heading, HeadingLevel } from '@/shared/ui/heading/Heading';
import { Button, ButtonType, Input } from '@/shared/ui';

import selectProfileData from '../../model/selectors/select-profile-data/selectProfileData';
import selectProfileIsLoading from '../../model/selectors/select-profile-isLoading/selectProfileIsLoading';
import selectProfileError from '../../model/selectors/select-profile-error/selectProfileError';
import classes from './ProfileCard.module.scss';


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
    <article className={classNames(classes.profilecard, {}, [className])}>
      <div className={classes.header}>
        <Heading As={HeadingLevel.H3}>{t('Профиль')}</Heading>
        <Button appearance={ButtonType.OUTLINE}>{t('Редактировать')}</Button>
      </div>
      <div className={classes.data}>
        <Input
          value={data?.firstname}
          placeholder={t('Ваше имя')}
          className={classes.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={classes.input}
        />
      </div>
    </article>
  );
}