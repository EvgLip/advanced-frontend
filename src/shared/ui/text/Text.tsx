import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Text.module.scss';
import { memo } from 'react';
import { Align, TypeOfAlign } from '@/shared/const/common';

export const TextTheme =
  {
    PRIMARY: 'primary',
    ERROR: 'error'
  } as const;

type TextThemeType = (typeof TextTheme)[keyof typeof TextTheme];

interface TextProps
{
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemeType;
  textAlign?: Align;
}

const Text = memo(function Text(props: TextProps)
{
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    textAlign = TypeOfAlign.LEFT
  } = props;

  return (
    <div className={classNames('', {}, [className, classes[theme], classes[textAlign]])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});

export default Text;