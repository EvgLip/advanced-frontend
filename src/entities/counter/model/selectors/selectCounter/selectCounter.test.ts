import { StateSheme } from '@/app/providers/store-proveder';
import { selectCounter } from './selectCounter';

describe(
  'selectCounter',
  function ()
  {
    test(
      'must return the counter object',
      function ()
      {
        const state: DeepPartial<StateSheme> = { counter: { value: 10 } };
        expect(selectCounter(state as StateSheme)).toEqual({ value: 10 });
      }
    );
  }
);
