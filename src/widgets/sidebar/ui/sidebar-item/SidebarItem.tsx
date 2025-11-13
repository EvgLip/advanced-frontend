
import { AppLink, LinkThemeList } from '@/shared/ui';
import { SidebarItemType } from '../../model/items.js';

import classes from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

interface SidebarItemProps
{
  item: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem = memo(function SidebarItem(props: SidebarItemProps)
{
  const { item, collapsed } = props;

  const { t } = useTranslation('translation');

  return (
    <AppLink
      className={classNames(classes.item, { [classes.collapsed]: collapsed })}
      theme={LinkThemeList.SECONDARY}
      to={item.path}
    >
      <item.Icon className={classes.icon} />
      <span className={classes.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});

export default SidebarItem;