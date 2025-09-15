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
export const AppLinkTheme =
  {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  } as const;

type LinkTheme = (typeof AppLinkTheme)[keyof typeof AppLinkTheme];

export default function AppLink(props: AppLinkProps)
{
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
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