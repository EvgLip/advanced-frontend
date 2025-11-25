import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import
{
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
  readonly?: boolean;
  onChangeFirstname: (value?: string) => void;
  onChangeLastname: (value?: string) => void;
  onChangeAge: (value?: string) => void;
  onChangeCity: (value?: string) => void;
}

export default function ProfileCard(props: ProfileCardProps)
{
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
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

      <div >
        <Input
          placeholder={t(' Имя')}
          className={classes.input}
          value={data?.firstname}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          placeholder={t('Фамилия')}
          className={classes.input}
          value={data?.lastname}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          placeholder={t('Возраст')}
          className={classes.input}
          value={data?.age?.toString()}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          placeholder={t('Город')}
          className={classes.input}
          value={data?.city}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          placeholder={t('Страна')}
          className={classes.input}
          value={data?.country}
          readonly={readonly}
        />
        <Input
          placeholder={t('Валюта')}
          className={classes.input}
          value={data?.currency}
          readonly={readonly}
        />
        <Input
          placeholder={t('Роль')}
          className={classes.input}
          value={data?.username}
          readonly={readonly}
        />
      </div>
    </article>
  );
}