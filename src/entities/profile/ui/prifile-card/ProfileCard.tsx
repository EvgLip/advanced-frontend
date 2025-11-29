import { useTranslation } from 'react-i18next';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import
{
  Input,
  Loader,
  Text,
  TextTheme,
  Heading,
  HeadingLevel,
  HeadingTheme,
  Avatar,
  Select,
} from '@/shared/ui';
import { CountryType, TypeOfAlign } from '@/shared/const/common';
import { CurrencySelector } from '@/entities/currency/ui/CurrencySelector';
import { CurrencyType } from '@/entities/currency';

import classes from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';


interface ProfileCardProps
{
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: CurrencyType) => void;
  onChangeCountry?: (value?: CountryType) => void;
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
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency
  } = props;
  const { t } = useTranslation('profile-card');

  const mod: Mods =
  {
    [classes.editing]: !readonly,
  };

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
    <article className={classNames(classes.profilecard, mod, [className])}>

      <div className={classes['avatar-wrapper']}>
        {data?.avatar && <Avatar src={data.avatar} size={100} alt='Аватарка' />}
      </div>
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
        placeholder={t('Введите имя пользователя')}
        className={classes.input}
        value={data?.username}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        placeholder={t('Введите ссылку на аватар')}
        className={classes.input}
        value={data?.avatar}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelector
        className={classes.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
    </article>
  );
}