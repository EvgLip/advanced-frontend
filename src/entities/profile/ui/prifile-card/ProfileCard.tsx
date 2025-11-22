import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import
{
  Button,
  ButtonType,
  Input,
  Loader,
  Text,
  TextTheme,
  Heading,
  HeadingLevel,
  HeadingTheme,
} from '@/shared/ui';

import classes from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import { TypeOfAlign } from '@/shared/const/common';


interface ProfileCardProps
{
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
}

export default function ProfileCard(props: ProfileCardProps)
{
  const {
    className,
    data,
    isLoading,
    error,
  } = props;
  const { t } = useTranslation('profile-card');

  if (isLoading)
  {
    return (
      <article className={classNames(classes.profilecard, { [classes.loading]: true }, [className])}>
        <Loader />
      </article>
    );
  }

  if (error)
  {
    return (
      <article className={classNames(classes.profilecard, {}, [className, classes.error])}>
        <Heading
          As={HeadingLevel.H3}
          theme={HeadingTheme.ERROR}
          textAlign={TypeOfAlign.CENTER}
        >
          {t('Произошла ошибка при загрузке профиля')}
        </Heading>
        <Text
          theme={TextTheme.ERROR}
          textAlign={TypeOfAlign.CENTER}
          text={t('Попробуйте обновить страницу')}
        />
      </article>
    );
  }

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