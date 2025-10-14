import { Button } from '@/shared/ui';
import { counterActions } from '../model/slice/counterSlice';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import { selectCounterValue } from '../model/selectors/selectCounteValue/selectCounterValue';
import classes from './Counter.module.scss';

export default function Counter()
{
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(selectCounterValue);

  const increment = () => { dispatch(counterActions.increment()); };
  const decrement = () => { dispatch(counterActions.decrement()); };

  return (
    <div>

      <h1 data-testid="value-title">
        {`Value = ${counterValue}`}
      </h1>

      <Button
        className={classes.btninverted}
        onClick={increment}
        data-testid="increment-btn"
      >
        {'increment'}
      </Button>

      <Button
        className={classes.btninverted}
        onClick={decrement}
        data-testid="decrement-btn"
      >
        {'decrement'}
      </Button>
    </div >
  );
}