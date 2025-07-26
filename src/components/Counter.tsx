import { useState } from 'react';
import * as styles from './Counter.module.scss';

export function Counter()
{
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <>
      <button className={styles.decr} onClick={decrement}>-</button>
      <span>{count}</span>
      <button className={styles.incr} onClick={increment}>+</button>
    </>
  );
}
