import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Text.module.scss';

export const TextTypeList =
  {
    PRIMARY: 'primary',
    ERROR: 'error'
  } as const;

type TextType = (typeof TextTypeList)[keyof typeof TextTypeList];

interface TextProps
{
  className?: string;
  title?: string;
  text?: string;
}

export default function Text(props: TextProps)
{
  const { className, title, text } = props;

  return (
    <div className={classNames('', {}, [className])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
}