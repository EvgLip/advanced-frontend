import { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export const ButtonAppearance =
  {
    PRIMARY: 'primary',
    CLEAR: 'clear',
    OUTLINE: 'outline',
    OUTLINE_RED: 'outline-red',
    BACKGROUND: 'background',
    BACKGROUND_INVERTED: 'backgroundinverted'
  } as const;

type ButtonAppearance = (typeof ButtonAppearance)[keyof typeof ButtonAppearance];

export const ButtonSize =
  {
    M: 'sizem',
    L: 'sizel',
    XL: 'sizexl',
  } as const;

type ButtonSizeType = (typeof ButtonSize)[keyof typeof ButtonSize];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
  className?: string;
  appearance?: ButtonAppearance;
  square?: boolean;
  size?: ButtonSizeType;
  children: ReactNode;
}

export default function Button(props: ButtonProps)
{
  const {
    className,
    children,
    appearance = ButtonAppearance.PRIMARY,
    square = false,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods =
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
