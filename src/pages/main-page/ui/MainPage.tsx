import { useTranslation } from 'react-i18next';

export default function MainPage()
{
  const { t } = useTranslation('main-page');
  return (
    <div>
      {t('Главная')}
    </div>
  );
}