import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui';
import classes from './LoaderPage.module.scss';

interface LoaderProps
{
  className?: string;
}

function LoaderPage({ className }: LoaderProps)
{
  return (
    < div className={classNames(classes['loader-page'], {}, [className])}>
      <Loader />
    </div >
  );
}

export default LoaderPage;