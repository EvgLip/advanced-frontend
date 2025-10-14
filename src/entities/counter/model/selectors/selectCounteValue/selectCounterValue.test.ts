import { RootState } from '@/app/providers/store-provider';
import { selectCounterValue } from './selectCounterValue';

describe(
  'selectCounterValue',
  function ()
  {
    test(
      'must return the counter value',
      function ()
      {
        const state: DeepPartial<RootState> = { counter: { value: 10 } };
        expect(selectCounterValue(state as RootState)).toEqual(10);
      }
    );
  }
);
