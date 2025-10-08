import { counterActions, counterReducer } from './counterSlice';
import { CounterState } from '../type/counterState';

describe(
  'counterSlice',
  function ()
  {
    test(
      'increment',
      function ()
      {
        const state: CounterState = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
      }
    );
    test(
      'decrement',
      function ()
      {
        const state: CounterState = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
      }
    );
    test(
      'should work with an empty state',
      function ()
      {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
      }
    );
  }
);