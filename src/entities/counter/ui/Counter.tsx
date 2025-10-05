import { Button } from '@/shared/ui';
import { counterActions } from '../model/slice/counterSlice';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-proveder';
import { selectCounterValue } from '../model/selectors/selectCounteValue/selectCounterValue';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Counter.module.scss';

export default function Counter()
{
  const dispatch = useAppDispatch();

  const counterValue = useAppSelector(selectCounterValue);

  const increment = () => { dispatch(counterActions.increment()); };
  const decrement = () => { dispatch(counterActions.decrement()); };

  return (
    <div>
      <h1>
        {counterValue}
      </h1>
      <Button className={classes.btninverted} onClick={increment} >
        {'increment'}
      </Button>
      <Button className={classes.btninverted} onClick={decrement}>
        {'decrement'}
      </Button>
    </div >
  );
}