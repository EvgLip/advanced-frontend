import { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '@shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export const ButtonTypeList =
  {
    CLEAR: 'clear',
    OUTLINE: 'outline',
    BACKGROUND: 'background',
    BACKGROUND_INVERTED: 'backgroundinverted'
  } as const;

type ButtonType = (typeof ButtonTypeList)[keyof typeof ButtonTypeList];

export const ButtonSizeList =
  {
    M: 'sizem',
    L: 'sizel',
    XL: 'sizexl',
  } as const;

type ButtonSize = (typeof ButtonSizeList)[keyof typeof ButtonSizeList];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
  className?: string;
  appearance?: ButtonType;
  square?: boolean;
  size?: ButtonSize;
  children: ReactNode;
}

export default function Button(props: ButtonProps)
{
  const {
    className,
    children,
    appearance,
    square = false,
    size,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> =
  {
    [classes[appearance]]: Boolean(appearance),
    [classes.square]: square,
    [classes[size]]: Boolean(size)
  };

  return (
    <button
      className={classNames(classes.button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
