import { classNames } from '@shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import * as classes from './NotFoundPage.module.scss';

interface NotFoundPageProps
{
  className?: string;
}

function NotFoundPage({ className }: NotFoundPageProps)
{
  const { t } = useTranslation('not-found-page');

  return (
    <div className={classNames(classes['not-found-page'])}>
      {t('Страница не найдена')}
    </div>
  );
}

export default NotFoundPage;