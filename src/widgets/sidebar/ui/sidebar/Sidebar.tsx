import { classNames } from '@shared/lib/classNames/classNames';
import * as classes from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from '@widgets/theme-switcher';
import { LanguageSwitcher } from '@widgets/language-switcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps
{
  className?: string;
}

export default function Sidebar(props: SidebarProps)
{
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation('translation');

  const onToggle = () => setIsCollapsed(prev => !prev);

  return (
    <aside
      data-testid='sidebar'
      className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, [className,])}>

      <button
        data-testid='sidebar-toggle'
        onClick={onToggle}
      >
        {t('скрыть')}
      </button>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>

    </aside>
  );
}
