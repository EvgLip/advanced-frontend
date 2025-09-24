import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Sidebar.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import Button, { ButtonTypeList } from '@shared/ui/button/Button';
import { ButtonSize, LinkThemeList } from '@shared/ui';
import { AppLink } from '@shared/ui';

import { ThemeSwitcher } from '@widgets/theme-switcher';
import { LanguageSwitcher } from '@widgets/language-switcher';

import AboutIcon from '@shared/assets/icons/about-20-20.svg';
import HomeIcon from '@shared/assets/icons/main-20-20.svg';


interface SidebarProps
{
  className?: string;
}

//коментарий для проверки ci на pull request
export default function Sidebar(props: SidebarProps)
{
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation('translation');
  const { t: tm } = useTranslation('main-page');
  const { t: ta } = useTranslation('about');

  const onToggle = () => setIsCollapsed(prev => !prev);

  return (
    <aside
      data-testid='sidebar'
      className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, [className,])}
    >

      <Button
        className={classes.collapseBtn}
        square
        size={ButtonSize.XL}
        data-testid='sidebar-toggle'
        onClick={onToggle}
        appearance={ButtonTypeList.BACKGROUND_INVERTED}
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <div className={classes.items}>
        <AppLink
          className={classes.item}
          theme={LinkThemeList.SECONDARY}
          to='/'
        >
          <HomeIcon className={classes.icon} />
          <span className={classes.link}>
            {tm(isCollapsed ? '' : 'Главная')}
          </span>
        </AppLink>

        <AppLink
          className={classes.item}
          theme={LinkThemeList.SECONDARY}
          to='/about'
        >
          <AboutIcon className={classes.icon} />
          <span className={classes.link}>
            {ta(isCollapsed ? '' : 'О сайте')}
          </span>
        </AppLink>
      </div>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={isCollapsed} />
      </div>

    </aside>
  );
}
