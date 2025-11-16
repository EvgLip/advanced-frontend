import type { JSX, ReactNode } from 'react';

import { TypeOfAlign, type Align } from '../../const/common';
import classes from './Heading.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export const HeadingLevel =
  {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
  } as const;

type HeadingAs = typeof HeadingLevel[(keyof typeof HeadingLevel)];

interface HeadingProps
{
  children: ReactNode;
  As?: Extract<keyof JSX.IntrinsicElements, HeadingAs>;
  textAlign?: Align;
  className?: string;
}
///////////////////////////
export function Heading(props: HeadingProps)
{
  const {
    children,
    As = HeadingLevel.H1,
    textAlign = TypeOfAlign.LEFT,
    className,
    ...other
  } = props;

  return (
    <As
      className={classNames(classes[textAlign], {}, [className])}
      {...other}
    >
      {children}
    </As>
  );

}