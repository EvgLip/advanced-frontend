import { classNames } from '@shared/lib/classNames/classNames';
import * as classes from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from '@widgets/theme-switcher';
import { LanguageSwitcher } from '@widgets/language-switcher';

interface SidebarProps
{
  className?: string;
}

export default function Sidebar(props: SidebarProps)
{
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => setIsCollapsed(prev => !prev);

  return (
    <aside className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, [className,])}>
      <button onClick={onToggle}>
        Скрыть
      </button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </aside>
  );
}
