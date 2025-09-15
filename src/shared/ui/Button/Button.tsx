import { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '@shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export const ButtonTypeList =
  {
    CLEAR: 'clear',
    OUTLINE: 'outline',
  } as const;

type ButtonType = (typeof ButtonTypeList)[keyof typeof ButtonTypeList];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
  className?: string;
  appearance?: ButtonType;
  children: ReactNode;
}

export default function Button(props: ButtonProps)
{
  const { className, children, appearance, ...otherProps } = props;

  return (
    <button
      className={classNames(styles.button, {}, [className, styles[appearance]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
