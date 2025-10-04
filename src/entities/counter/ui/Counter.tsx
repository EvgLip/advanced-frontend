import { useDispatch } from 'react-redux';

import { Button } from '@/shared/ui';
import { counterActions } from '../model/slice/counterSlice';

export default function Counter()
{
  const dispatch = useDispatch();

  const increment = () => { dispatch(counterActions.increment()); };
  const decrement = () => { dispatch(counterActions.decrement()); };

  return (
    <div>
      <h1>
        {'value'}
      </h1>
      <Button onClick={increment}>
        {'increment'}
      </Button>
      <Button onClick={decrement}>
        {'decrement'}
      </Button>
    </div>
  );
}