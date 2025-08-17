import { classNames } from '@shared/lib/classNames/classNames';
import * as classes from './Sidebar.module.scss';
import { useState } from 'react';

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
    </aside>
  );
}
