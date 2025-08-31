import { classNames } from '@shared/lib/classNames/classNames';
import * as classes from './Loader.module.scss';

interface LoaderProps
{
  className?: string;
}

function Loader({ className }: LoaderProps)
{
  return (
    < div className={classNames(classes['lds-spinner'], {}, [className])}>
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