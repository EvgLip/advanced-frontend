import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Text.module.scss';
import { memo } from 'react';

export const TextThemeList =
  {
    PRIMARY: 'primary',
    ERROR: 'error'
  } as const;

type TextTheme = (typeof TextThemeList)[keyof typeof TextThemeList];

interface TextProps
{
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

const Text = memo(function Text(props: TextProps)
{
  const {
    className,
    title,
    text,
    theme = TextThemeList.PRIMARY,
  } = props;

  return (
    <div className={classNames('', {}, [className, classes[theme]])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});

export default Text;