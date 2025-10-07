import { Counter } from '@/entities/counter';
import { Input } from '@/shared/ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MainPage()
{
  const { t } = useTranslation('main-page');
  const [inputValue, setInputValue] = useState('');

  const changeHandler = (value: string) => setInputValue(value);

  return (
    <div>
      {t('Главная')}
      <Input
        placeholder='Введите текст'
        value={inputValue}
        onChange={changeHandler}
      />
    </div>
  );
}