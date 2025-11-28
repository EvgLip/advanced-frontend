import { useTranslation } from 'react-i18next';

import { Select } from '@/shared/ui';

import { Currency, CurrencyType } from '../model/types/currency';
import { memo, useCallback } from 'react';

interface CurrencySelectProps
{
  className?: string;
  value?: CurrencyType;
  onChange?: (value: CurrencyType) => void;
  readonly?: boolean;
}

const options =
  [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
  ];

export const CurrencySelector = memo(function CurrencySelector(props: CurrencySelectProps)
{
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;
  const { t } = useTranslation('currency-select');

  const onChangeHandler = useCallback((value: string) =>
  {
    onChange?.(value as CurrencyType);
  }, [onChange]);

  return (
    <Select
      className={className}
      label={t('Выберите валюту')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
