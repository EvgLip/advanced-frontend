import { StateSheme } from '@/app/providers/store-proveder';
import { selectCounterValue } from './selectCounterValue';

describe(
  'selectCounterValue',
  function ()
  {
    test(
      'must return the counter value',
      function ()
      {
        const state: DeepPartial<StateSheme> = { counter: { value: 10 } };
        expect(selectCounterValue(state as StateSheme)).toEqual(10);
      }
    );
  }
);
