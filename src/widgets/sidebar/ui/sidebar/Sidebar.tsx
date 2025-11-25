import { memo, useMemo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import { LanguageSwitcher } from '@/widgets/language-switcher';
import Button, { ButtonAppearance } from '@/shared/ui/button/Button';
import { ButtonSize } from '@/shared/ui';

import { SidebarItemsList } from '../../model/items';

import classes from './Sidebar.module.scss';
import SidebarItem from '@/widgets/sidebar/ui/sidebar-item/SidebarItem';

interface SidebarProps
{
  className?: string;
}

//коментарий для проверки ci на pull request
const Sidebar = memo(function Sidebar(props: SidebarProps)
{
  const { className = '' } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [test, setTest] = useState(0);

  const onToggle = () => setIsCollapsed(prev => !prev);

  const itemsList = useMemo(() =>
    SidebarItemsList.map(item =>
      (<SidebarItem item={item} key={item.text} collapsed={isCollapsed} />)
    ), [isCollapsed]);

  return (
    <aside
      data-testid='sidebar'
      className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, [className,])}
    >

      <Button
        className={classes.collapsebtn}
        square
        size={ButtonSize.XL}
        data-testid='sidebar-toggle'
        onClick={onToggle}
        appearance={ButtonAppearance.BACKGROUND_INVERTED}
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <div className={classes.items}>
        {itemsList}
      </div>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={isCollapsed} />
      </div>

    </aside>
  );
});

export default Sidebar;
