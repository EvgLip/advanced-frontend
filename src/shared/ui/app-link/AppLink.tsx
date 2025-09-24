import { classNames } from '@shared/lib/classNames/classNames';
import { type ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import classes from './AppLink.module.scss';

interface AppLinkProps extends LinkProps
{
  className?: string;
  children?: ReactNode;
  theme?: LinkTheme;
}
//вместо enum
export const LinkThemeList =
  {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    RED: 'red',
  } as const;

type LinkTheme = (typeof LinkThemeList)[keyof typeof LinkThemeList];

export default function AppLink(props: AppLinkProps)
{
  const {
    to,
    className,
    children,
    theme = LinkThemeList.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(classes.applink, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
}