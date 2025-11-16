import { StateShema } from '@/app/providers/store-provider';
import { selectCounter } from './selectCounter';

describe(
  'selectCounter',
  function ()
  {
    test(
      'must return the counter object',
      function ()
      {
        const state: DeepPartial<StateShema> = { counter: { value: 10 } };
        expect(selectCounter(state as StateShema)).toEqual({ value: 10 });
      }
    );
  }
);
