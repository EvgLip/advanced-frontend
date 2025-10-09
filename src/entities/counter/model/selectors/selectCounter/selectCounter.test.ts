import { RootState } from '@/app/providers/store-proveder';
import { selectCounter } from './selectCounter';

describe(
  'selectCounter',
  function ()
  {
    test(
      'must return the counter object',
      function ()
      {
        const state: DeepPartial<RootState> = { counter: { value: 10 } };
        expect(selectCounter(state as RootState)).toEqual({ value: 10 });
      }
    );
  }
);
