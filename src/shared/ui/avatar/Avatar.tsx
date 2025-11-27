import { CSSProperties, useMemo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import classes from './Avatar.module.scss';


interface AvatarProps
{
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export default function Avatar(props: AvatarProps)
{
  const { className, src, size, alt } = props;
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => (
    {
      with: size || 100,
      height: size || 100
    }), [size]);

  return (
    <img
      className={classNames(classes.avatar, mods, [className])}
      src={src}
      style={styles}
      alt={alt}
    />
  );
}