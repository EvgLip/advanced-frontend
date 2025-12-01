import { memo } from 'react';

import { Select } from '@/shared/ui';
import { Countries, CountryType } from '../model/types/country';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

interface CountrySelectProps
{
  className?: string;
  value?: CountryType;
  onChange?: (value: CountryType) => void;
  readonly?: boolean;
}

const options =
  [
    { value: Countries.Russia, content: t('Россия') },
    { value: Countries.Belarus, content: t('Беларусь') },
    { value: Countries.Ukraine, content: t('Украина') },
    { value: Countries.Kazakhstan, content: t('Казахстан') },
    { value: Countries.Armenia, content: t('Армения') },
  ];

export const CountrySelector = memo(function CountrySelector(props: CountrySelectProps) 
{
  const {
    className,
    value,
    onChange,
    readonly } = props;

  const { t } = useTranslation('country-selector');

  function onChangeHandler(value: string)
  {
    onChange?.(value as CountryType);
  }

  return (
    <Select
      className={className}
      label={t('Страна')}
      options={options}
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
    />
  );
});