import { classNames } from '@shared/lib/classNames/classNames';
import classes from './Loader.module.scss';

interface LoaderProps
{
  className?: string;
}

function Loader({ className }: LoaderProps)
{
  return (
    < div className={classNames(classes['ldsspinner'], {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div >
  );
}

export default Loader;