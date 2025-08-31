import { classNames } from '@shared/lib/classNames/classNames';
import * as classes from './LoaderPage.module.scss';
import { Loader } from '@shared/ui';

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