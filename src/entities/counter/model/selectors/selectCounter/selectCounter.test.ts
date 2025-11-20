import { StateSchema } from '@/app/providers/store-provider';
import { selectCounter } from './selectCounter';

describe(
  'selectCounter',
  function ()
  {
    test(
      'must return the counter object',
      function ()
      {
        const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
        expect(selectCounter(state as StateSchema)).toEqual({ value: 10 });
      }
    );
  }
);
